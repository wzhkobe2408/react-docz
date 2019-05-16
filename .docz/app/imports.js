export const imports = {
  "docs/Button.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-button" */ "docs/Button.mdx"),
  "docs/Contributors.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-contributors" */ "docs/Contributors.mdx"),
  "docs/Image.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-image" */ "docs/Image.mdx"),
  "docs/Input.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-input" */ "docs/Input.mdx"),
  "docs/index.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-index" */ "docs/index.mdx")
};
