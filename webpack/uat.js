const BaseWebpack = require('./base');

const UAT = {
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        host: 'localhost',
        port: 8090,
        inline: true, // 实时刷新
        proxy:{
            "/Home": {
                target: "http://api.bbwansha.com:8080/v24/index.php",
                changeOrigin: true,
                secure: false
            }
        }
    },
    mode:'development',
}

module.exports = Object.assign({},BaseWebpack,UAT);