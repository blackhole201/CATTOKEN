const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

module.exports = {
  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match(originalTag, { kebabTag, camelTag, path, component }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      }
    }])
  },
  configureWebpack() {
    let additionalConfig = {};
    if (process.env.NODE_ENV === 'production') {
      additionalConfig = {
        plugins: [
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './public/index.html'),
              path.join(__dirname, './src/**/*.vue'),
              path.join(__dirname, './src/**/*.html'),
            ]),
          }),
        ],
      };
    }
    return additionalConfig;
  },
}