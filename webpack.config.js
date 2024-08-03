const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // Cleans the output directory before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Path to your HTML template in src
      filename: 'index.html',  // Output filename in dist
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,  // Example rule for processing CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Example rule for processing images
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    },
    ],
  },
  devServer: {
    contentBase: './dist',
},  resolve: {
    alias: {
        '@fortawesome/fontawesome-free': path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')
    }
}
};

