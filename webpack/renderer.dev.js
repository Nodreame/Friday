const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./renderer.common')

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist/app'),
        },
        compress: true,
        host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
        port: 7001, // 启动端口为 7001 的服务
        hot: true,
    },
})