import {
  mapComponentNodeToIComponent,
  mapComponentSetNodeToIComponentSet,
  mapInstanceNodeToIInstance,
} from './mappers';
import { IComponent, IComponentSet, IInstance, IPage } from './types';

type NodeTypes = 'COMPONENT' | 'COMPONENT_SET' | 'INSTANCE';
type ReturnTypeMap = {
  COMPONENT: IComponent;
  COMPONENT_SET: IComponentSet;
  INSTANCE: IInstance;
};

/**
 * Retrieves specified types of nodes based on given parameters.
 * Searches within the provided page, the entire document, or the current page by default.
 *
 * @param types Node types to search for.
 * @param page Page to search within. Defaults to current page if not provided.
 * @param root If true, searches the entire document. Overrides 'page' parameter.
 * @returns Array of SceneNodes of specified types.
 */
export const getNodesByType = async <T extends NodeTypes>({
  types,
  context = { page: figma.currentPage },
}: {
  types: T[];
  context?: { root: true } | { selection: true } | { page: PageNode };
}): Promise<ReturnTypeMap[T][]> => {
  let rawNodes: Array<SceneNode | PageNode> = [];

  if ('root' in context && context.root) {
    rawNodes = figma.root.findAllWithCriteria({ types });
  } else if ('selection' in context && context.selection) {
    rawNodes = figma.currentPage.selection.filter((node) =>
      types.includes(node.type as T)
    );
  } else if ('page' in context) {
    rawNodes = figma.currentPage.findAllWithCriteria({ types });
  } else {
    throw new Error('Invalid search context');
  }
  const nodes = await Promise.all(
    rawNodes
      .filter((node): node is SceneNode => node.type !== 'PAGE')
      .map(async (node: SceneNode): Promise<ReturnTypeMap[T] | undefined> => {
        if (node.type === 'COMPONENT') {
          return mapComponentNodeToIComponent(node) as ReturnTypeMap[T];
        } else if (node.type === 'COMPONENT_SET') {
          return mapComponentSetNodeToIComponentSet(node) as ReturnTypeMap[T];
        } else if (node.type === 'INSTANCE') {
          return (await mapInstanceNodeToIInstance(node)) as ReturnTypeMap[T];
        } else {
          return;
        }
      })
      .filter((node): node is any => node !== undefined)
  );

  return nodes;
};

/**
 * Recursively retrieves the PageNode for a given node.
 * Throws an error if the PageNode is not found (which generally indicates an abnormal situation).
 * @param node The node to find the PageNode for.
 * @returns The PageNode that the node is part of.
 */
export const getNodePage = (node: BaseNode): IPage | null => {
  if (node.type === 'PAGE') {
    return {
      id: node.id,
      name: node.name,
      node: node,
    };
  }

  if (
    (node.type === 'COMPONENT_SET' || node.type === 'COMPONENT') &&
    node.remote
  ) {
    // we can't get the parent of the remote component
    return null;
  }
  if (node.parent) {
    return getNodePage(node.parent);
  }

  // The node is not part of any page, probably the node is root
  return null;
};

/**
 * Deletes an InstanceNode and handles errors.
 * @param node The InstanceNode to delete.
 */
export const deleteInstance = ({ node }: { node: InstanceNode }) => {
  try {
    node.remove();
  } catch (err) {
    // todo: test
    node.detachInstance().remove();
  }
};

/**
 * Focuses on the node with the given ID.
 * Switches to the node's page, selects the node, and zooms into view.
 * Optionally filters nodes by type.
 * @param nodeId ID of the node to focus on.
 * @param nodeTypes Optional array of node types to filter.
 * @param notification Optional notification message.
 */
export const focusOnNodes = async ({
  nodeIds,
  nodeTypes,
  notification,
}: {
  nodeIds: string[];
  nodeTypes?: Array<SceneNode['type']>;
  notification?: string;
}) => {
  const nodes = (
    await Promise.all(nodeIds.map((id) => figma.getNodeByIdAsync(id)))
  )
    .filter(
      (node): node is SceneNode =>
        node !== null && node.type !== 'DOCUMENT' && node.type !== 'PAGE'
    )
    .filter((node) => !nodeTypes || nodeTypes.includes(node.type));

  if (nodes.length > 0) {
    const pageNode = getNodePage(nodes[0]);

    if (pageNode) {
      await figma.setCurrentPageAsync(pageNode.node);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    notification && figma.notify(notification);
  }
};

export function groupComponentsByParent<T extends IComponent | IInstance>(
  items: T[]
): Record<string, T[]> {
  return items.reduce(
    (acc, item) => {
      const key =
        'mainComponent' in item
          ? item.mainComponent?.name ?? item.name
          : item.parent?.name ?? item.name;

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    },
    {} as Record<string, T[]>
  );
}
