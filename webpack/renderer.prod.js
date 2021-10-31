const { merge } = require('webpack-merge')
const commonConfig = require('./renderer.common')

module.exports = merge(commonConfig, {
    mode: 'production',
})