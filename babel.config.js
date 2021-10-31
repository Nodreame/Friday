module.exports = {
    presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: ['> 0.5%, last 2 versions']
                },
                useBuiltIns: 'usage',
            }
        ]
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
    ],
}