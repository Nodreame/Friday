const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
    mode: 'development',
    watch: true,
    devtool: 'eval-source-map'
})