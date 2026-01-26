// SpiraCSS Configuration for Vanilla Starter (Vite)
export default {
  aliasRoots: {
    src: ['src'],
    components: ['src/components'],
    styles: ['src/styles'],
    common: ['src/components/common'],
    pages: ['src/components/pages'],
    parts: ['src/components/parts'],
    assets: ['src/assets']
  },
  fileCase: {
    root: 'pascal',
    child: 'kebab'
  },
  stylelint: {
    base: {
      paths: {
        components: ['src/components']
      },
      external: {
        prefixes: ['u-']
      }
    }
  },
  generator: {
    layoutMixins: ['@include breakpoint-up(md)']
  }
}
