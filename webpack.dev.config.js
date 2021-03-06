const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve('./src'),
    devtool: 'eval-source-map',
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + "/public",
        filename: "js/bundle-dev.js"
    },
    mode:'development',
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        host: 'localhost',
        port: 8088,
        inline: true // 实时刷新
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
            template:'index.html'
        })
    ]
}