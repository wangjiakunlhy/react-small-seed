const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const absUrl = __dirname.replace('webpack','')

const BaseWebpack = {
    context: path.resolve('./src'),
    devtool: 'eval-source-map',
    entry: absUrl + 'src/index.js',
    output: {
        path: absUrl + 'public',
        filename: "js/[name].[hash].bundle.js"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader','postcss-loader','less-loader']
            },
            {
                test:/\.less$/,
                loaders: [
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'postcss-loader'},
                    {loader:'less-loader',options: {javascriptEnabled:true}},
                ],
            },
            {
                test:/\.(jpeg|png|gif|jpg)$/,
                use:['url-loader']
            },
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:absUrl+'src/index.html',
        })
    ]
}

module.exports = BaseWebpack;