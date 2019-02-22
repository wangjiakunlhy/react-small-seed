const BaseWebpack = require('./base');

const DEV = {
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        host: 'localhost',
        port: 8089,
        inline: true, // 实时刷新
        proxy: [
            {
                context:['/Home'],
                changeOrigin: true,
                target:'http://api.bbwansha.com:8080/v24/index.php'
            }
        ]
    },
    mode:'none',
}

module.exports = Object.assign({},BaseWebpack,DEV);