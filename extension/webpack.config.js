const path = require('path');

module.exports = {
  entry: './public/popup.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'popup-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
