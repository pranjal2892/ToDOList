Basic Setup React Webpack Babel Minimal Boilerplate
Create app folder.
npm init
install react and react-dom

babel-dev dependency installations (transpliling/transform code for old browsers from ES6)
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev


babel-core => transpiling code from new syntax to js.
preset-react => transforming code from react to vanilla js
preact-env => transforming code ES6 to ES5

Webpack-dev depenecy installations
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin

create .babelrc with presets
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

webpack.config.js with babel-loader (code transpiled in react and webpack using babel loader.)
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

html loader
npm i html-webpack-plugin html-loader --save-dev

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};

