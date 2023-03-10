const path = require('path');
const webpack = require('webpack');

const config = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import')({
      resolve(id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3));
        }
        if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2));
        }
        if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1));
        }
        return id;
      },
    }),
    require('tailwindcss'),
    require('postcss-class-rename')({
      '\\\\.': '_', // 兼容小程序，将类名带 .和/ 替换成 _
    }),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5',
    }),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),
  ],
};
if (webpack.version[0] > 4) {
  delete config.parser;
}
module.exports = config;
