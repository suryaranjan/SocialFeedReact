var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:"development",
  entry:'./Src/Index.js',
  output:{
      path:path.join(__dirname, '/Dist'),
      filename:'app.js'
  },
 devServer: {
    
        
        stats: "errors-only",
        host: process.env.HOST, 
        port: process.env.PORT,
        open: true,
        
      },
  module:{
      rules:[
          {
              test:/\.jsx$/,
              exclude: /node_modules/,
              
             use:{
                 loader:'babel-loader',
             },
             
             
          },
          {
              test:/\.js$/,
              exclude: /node_modules/,
              
             use:{
                 loader:'babel-loader',
             },
             
             
          },
          {
              test:/\.css$/,
              use:[
                  'style-loader',
                    'css-loader'
                ]
                  
              
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template:'./Index.html'
    })
   
    
  ],
  stats:{
      colors:true
  },
  devtool:'source-map'
};
