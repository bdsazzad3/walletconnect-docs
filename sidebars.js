// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  mainSidebar: [
    {
      type: "category",
      label: "Introduction",
      className: "menu_outer_list",
      collapsible: false,
      items: ["readme"],
    },
    {
      type: "category",
      label: "Products",
      collapsible: false,
      className: "menu_outer_list",
      items: [
        {
          type: "category",
          label: "Web3Modal",
          collapsed: true,
          collapsible: true,
          items: [
            "web3modal/about",
            "web3modal/configuration",
            {
              type: "category",
              label: "React Usage",
              collapsed: true,
              collapsible: true,
              items: ["web3modal/react/installation", "web3modal/react/hooks"],
            },
            {
              type: "category",
              label: "Html & JS Usage",
              collapsed: true,
              collapsible: true,
              items: [
                "web3modal/html-js/installation",
                "web3modal/html-js/actions",
              ],
            },
            "web3modal/standalone",
            "web3modal/for-wallets",
          ],
        },
        {
          type: "category",
          label: "SDKs",
          collapsed: true,
          collapsible: true,
          items: [
            "introduction/sign",
            "introduction/auth",
            "introduction/chat",
            "introduction/push",
          ],
        },
        "introduction/cloud-explorer",
      ],
    },
    {
      type: "category",
      label: "Advanced",
      collapsible: false,
      className: "menu_outer_list",
      items: [
        "introduction/glossary",
        "advanced/migrating-from-v1.0",
        "advanced/relay-server",
        "advanced/chain-ecosystem-onboarding",
        {
          type: "category",
          label: "RPC Reference",
          items: [
            "advanced/rpc-reference/ethereum-rpc",
            "advanced/rpc-reference/cosmos-rpc",
            "advanced/rpc-reference/solana-rpc",
            "advanced/rpc-reference/stellar-rpc",
          ],
        },
        {
          type: "category",
          label: "Specs",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "autogenerated",
              dirName: "specs",
            },
          ],
        },
      ],
    },
  ],
  javascript: [
    {
      type: "category",
      label: "Products",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Sign",
          collapsible: true,
          collapsed: true,
          items: [
            "javascript/sign/installation",
            "javascript/sign/dapp-usage",
            "javascript/sign/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Auth",
          collapsible: true,
          collapsed: true,
          items: [
            "javascript/auth/installation",
            "javascript/auth/dapp-usage",
            "javascript/auth/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Push",
          collapsible: true,
          collapsed: true,
          items: ["javascript/push/installation"],
        },
        {
          type: "category",
          label: "Chat",
          collapsible: true,
          collapsed: true,
          items: ["javascript/chat/installation", "javascript/chat/usage"],
        },
        {
          type: "category",
          label: "Core",
          collapsible: true,
          collapsed: true,
          items: ["javascript/core/pairing-api"],
        },
        {
          type: "category",
          label: "Providers",
          collapsible: true,
          collapsed: true,
          items: [
            "javascript/providers/cosmos",
            "javascript/providers/ethereum",
            "javascript/providers/solana",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        "javascript/guides/examples-and-resources",
        "javascript/guides/nodejs",
        "javascript/guides/react-native",
        "javascript/guides/shared-core",
        "javascript/guides/typescript",
      ],
    },
  ],
  kotlin: [
    {
      type: "category",
      label: "Products",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Sign",
          collapsible: true,
          collapsed: true,
          items: [
            "kotlin/sign/installation",
            "kotlin/sign/dapp-usage",
            "kotlin/sign/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Auth",
          collapsible: true,
          collapsed: true,
          items: [
            "kotlin/auth/installation",
            "kotlin/auth/dapp-or-requester-usage",
            "kotlin/auth/wallet-or-responder-usage",
          ],
        },
        {
          type: "category",
          label: "Push",
          collapsible: true,
          collapsed: true,
          items: ["kotlin/push/installation"],
        },
        {
          type: "category",
          label: "Chat",
          collapsible: true,
          collapsed: true,
          items: ["kotlin/chat/installation", "kotlin/chat/usage"],
        },
        {
          type: "category",
          label: "Core",
          collapsible: true,
          collapsed: true,
          items: [
            "kotlin/core/installation",
            "kotlin/core/pairing",
            "kotlin/core/relay",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        "kotlin/guides/examples-and-resources",
        "kotlin/guides/mobile-linking",
      ],
    },
  ],
  swift: [
    {
      type: "category",
      label: "Products",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Sign",
          collapsible: true,
          collapsed: true,
          items: [
            "swift/sign/installation",
            "swift/sign/dapp-usage",
            "swift/sign/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Auth",
          collapsible: true,
          collapsed: true,
          items: [
            "swift/auth/installation",
            "swift/auth/dapp-usage",
            "swift/auth/wallet-usage",
          ],
        },
        {
          type: "category",
          label: "Push",
          collapsible: true,
          collapsed: true,
          items: ["swift/push/installation"],
        },
        {
          type: "category",
          label: "Chat",
          collapsible: true,
          collapsed: true,
          items: ["swift/chat/installation", "swift/chat/usage"],
        },
        {
          type: "category",
          label: "Core",
          collapsible: true,
          collapsed: true,
          items: [
            "swift/core/installation",
            "swift/core/pairing-usage",
            "swift/core/networking-configuration",
          ],
        },
        {
          type: "category",
          label: "Router",
          collapsible: true,
          collapsed: true,
          items: ["swift/router/installation"],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        "swift/guides/examples-and-resources",
        "swift/guides/mobile-linking",
      ],
    },
  ],
};
