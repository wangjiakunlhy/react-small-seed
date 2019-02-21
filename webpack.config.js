const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    context: path.resolve('./src'),
    devtool: 'eval-source-map',
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + "/public",
        filename: "js/[name].[hash].bundle.js",
    },
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    },
    performance: {
        hints: false
    },
    devServer: {
        port:8088,
        contentBase: './public',
        historyApiFallback: true,
        inline: true // 实时刷新
    },
    mode: 'production',
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
                use:[
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader','postcss-loader','less-loader']
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
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}