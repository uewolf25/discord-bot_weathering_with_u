const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  /* productionモードの方が圧倒的にファイルが小さいが、
  GASを使用する場合は開発できなくなるので、「development」で！
  // mode: 'production',*/
  mode: 'development',
  entry: './src/index.ts',
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules'],
  },
  plugins: [new GasPlugin()],
};
