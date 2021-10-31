const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    entry: path.resolve('src/app', 'index.tsx'),
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '.../dist/app'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less']
    },
    module: {
        rules: [
            { 
                test: /\.(js|ts)x?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/app/public/index.html' }),
    ],
}

module.exports = config;