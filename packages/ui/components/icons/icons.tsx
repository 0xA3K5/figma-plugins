import { h } from 'preact';

interface Props {
  size?: number;
}

export function IconTarget({ size = 24 }: Props): h.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5625 10.25V7.64687C9.49575 7.85162 7.8525 9.49575 7.64687 11.5625H10.25V12.4375H7.64687C7.85162 14.5042 9.49575 16.1475 11.5625 16.3531V13.75H12.4375V16.3531C14.5042 16.1484 16.1475 14.5042 16.3531 12.4375H13.75V11.5625H16.3531C16.1484 9.49575 14.5042 7.8525 12.4375 7.64687V10.25H11.5625ZM17.2325 11.5625C17.0216 9.01188 14.9881 6.97838 12.4375 6.7675V5H11.5625V6.7675C9.01188 6.97838 6.97838 9.01188 6.7675 11.5625H5V12.4375H6.7675C6.97838 14.9881 9.01188 17.0216 11.5625 17.2325V19H12.4375V17.2325C14.9881 17.0216 17.0216 14.9881 17.2325 12.4375H19V11.5625H17.2325Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconComponent({ size = 24 }: Props): h.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.53782 8.45236L12 6L14.4622 8.45236L12 10.9047L9.53782 8.45236ZM8.45236 14.4633L6 12L8.45236 9.53782L10.9047 12L8.45236 14.4622V14.4633ZM14.4633 15.5476L12 18L9.53782 15.5476L12 13.0953L14.4622 15.5476H14.4633ZM18 12L15.5476 9.53782L13.0953 12L15.5476 14.4622L18 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconCaseSensitive({ size = 24 }: Props): h.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="m2.66675 10.7157 2.67522-6.04904h.65602l2.68374 6.04904h-.82642l-.78382-1.76357H4.25143l-.76678 1.76357h-.8179ZM5.6572 5.74016l-1.09053 2.4963h2.18959L5.6572 5.74016ZM11.1012 10.8009c-.5907 0-1.0877-.2158-1.49094-.6475-.39759-.43165-.59639-.9542-.59639-1.56762 0-.61343.1988-1.13598.59639-1.56765.40324-.43167.90024-.6475 1.49094-.6475.3124 0 .6021.07099.869.21299.2727.13632.4828.31239.6305.52823v-.65603h.7327v4.25988h-.7327v-.656c-.1477.2158-.3578.3948-.6305.5368-.2669.1363-.5566.2044-.869.2044Zm.1108-.673c.4203 0 .7668-.14772 1.0394-.44307.2726-.29535.409-.6617.409-1.09905 0-.43735-.1364-.80371-.409-1.09906-.2726-.29535-.6191-.44303-1.0394-.44303-.426 0-.7753.14768-1.048.44303-.27259.29535-.4089.66171-.4089 1.09906 0 .43735.13631.8037.4089 1.09905.2727.29535.622.44307 1.048.44307Z"
      />
    </svg>
  );
}
export function IconWholeWord({ size = 24 }: Props): h.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M3.3999 4h9.1429v.57143H3.3999V4ZM3.3999 11.4286h9.1429V12H3.3999v-.5714ZM5.30485 10.8571c-.53908 0-.99264-.1904-1.36068-.5714-.36284-.38094-.54427-.84209-.54427-1.38344 0-.54136.18143-1.00251.54427-1.38346.36804-.38096.8216-.57143 1.36068-.57143.2851 0 .54946.06266.79309.18797.24881.1203.4406.27569.57537.46616v-.57894h.66868V10.782h-.66868v-.579c-.13477.1905-.32656.3484-.57537.4737-.24363.1203-.50799.1804-.79309.1804Zm.10108-.5939c.38359 0 .69978-.1304.94859-.39102.24881-.26065.37322-.58396.37322-.96992 0-.38597-.12441-.70928-.37322-.96993-.24881-.26065-.565-.39098-.94859-.39098-.38876 0-.70755.13033-.95636.39098-.24881.26065-.37322.58396-.37322.96993 0 .38596.12441.70927.37322.96992.24881.26062.5676.39102.95636.39102ZM10.6378 10.8571c-.2851 0-.552-.0601-.80085-.1804-.24363-.1253-.43283-.2832-.5676-.4737v.579h-.66867V5.14286h.66867V7.6015c.13477-.19047.32397-.34586.5676-.46616.24885-.12531.51575-.18797.80085-.18797.5391 0 .9901.19047 1.3529.57143.368.38095.5521.8421.5521 1.38346 0 .54135-.1841 1.0025-.5521 1.38344-.3628.381-.8138.5714-1.3529.5714Zm-1.04966-.98492c.24881.26062.56496.39102.94856.39102.3836 0 .6998-.1304.9486-.39102.2488-.26065.3732-.58396.3732-.96992 0-.38597-.1244-.70928-.3732-.96993-.2488-.26065-.565-.39098-.9486-.39098-.3836 0-.69975.13033-.94856.39098-.24881.26065-.37321.58396-.37321.96993 0 .38596.1244.70927.37321.96992Z"
      />
    </svg>
  );
}
