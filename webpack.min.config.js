const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    literallycanvas: './lib/js/literallycanvas.js',
    'literallycanvas-core': './lib/js/literallycanvas-core.js',
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'lib/js'),
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          },
        },
      }),
    ],
  },
};
