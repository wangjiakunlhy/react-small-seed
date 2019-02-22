
const BaseWebpack = require('./base');

const PROD = {
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        host: 'localhost',
        port: 8098,
        inline: true, // 实时刷新
        proxy:{
            "/Home": {
                target: "http://api.bbwansha.com:8080/v24/index.php",
                changeOrigin: true,
                secure: false
            }
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    performance: {
        hints: false
    },
    mode:'production',
}

module.exports = Object.assign({},BaseWebpack,PROD);