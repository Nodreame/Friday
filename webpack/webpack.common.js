const path = require('path')

const config = {
    entry: {
        main: path.resolve('./src/nodejs/main.ts'),
        preload: path.resolve('./src/nodejs/preload.ts'),
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        path: path.resolve('dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve('./src/nodejs/tsconfig.json')
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    target: 'electron-main',
}

module.exports = config