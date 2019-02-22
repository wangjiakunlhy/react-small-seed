const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const DEV = require('./webpack/dev');
const UAT = require('./webpack/uat');
const PROD = require('./webpack/prod');

const current = process.env.npm_lifecycle_event;
console.log(current);
function getENV(){
    switch (current){
        case 'dev':return DEV;
        case 'uat':return UAT;
        case 'prod':return PROD;
        case 'build':return PROD;
        default :return DEV;
    }
}

module.exports = getENV();
