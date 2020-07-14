const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        'DavidPage': path.join(__dirname, 'src', 'DavidPage.vue'),
        'IssacPage': path.join(__dirname, 'src', 'IssacPage.vue')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        library: 'Vue',
        libraryTarget: 'umd'
    },
    mode: 'production',
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    }
};