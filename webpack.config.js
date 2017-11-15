var path = require('path');
var webpack = require("webpack");

module.exports = {
entry: './contact_list.js', 
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'dist')
},
/*plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    ], */
module: {
    rules: [{
    test: /\.js$/, // запустим загрузчик во всех файлах .js
    exclude: /node_modules/, // проигнорируем все файлы в папке node_modules
    use: {
    loader:'babel-loader',
    options: { presets: ['env', 'react']}
    },
    }]
}
}
