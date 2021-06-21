const path = require('path'); // 노드에서 경로를 쉽게 가져오도록 도와주는 것
const webpack = require('webpack');
const webpackConfig = require('../01GuGuDan웹팩/webpack.config');

module.exports = {
    mode: 'development', 
    devtool: 'eval', 
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    }, 

    module: {
        rules:[{
            test: /\.jsx?/, 
            loader: 'babel-loader', 
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR','last 2 chrome versions'],
                        },
                        debug: true, 
                    }], 
                    '@babel/preset-react',
                ],
                plugins: [],
            },
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],

    output:{
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};