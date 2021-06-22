const path = require('path'); // 노드에서 경로를 쉽게 가져오도록 도와주는 것
const webpack = require('webpack');
const webpackConfig = require('../01구구단웹팩/webpack.config');

module.exports = {
    name: 'word-relay-setting', // 사실은 필요없음
    mode: 'development', // 실서비스에서는 production으로 변경
    devtool: 'eval', // 빠르게 하겠다
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'], // client.jsx가 WordRelay.jsx를 불러 오고 있기 떄문에 WordRelay.jsx는 작성하지 않아도됨 & 확장자 명도 쓰지 않아도 됨 대신 resolve 옵션작성!
    }, // 입력

    module: {
        rules:[{
            test: /\.jsx?/, // 정규표현식 ( js파일과 jsx파일에 이 룰을 적용하겠다 )
            loader: 'babel-loader', 
            options: {
                /* 
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
                @babel/preset-env가 하나처럼 보이지만 실제로는 plugins들을 합친것들이 있음

                해당 코드처럼 원하는 브라우저만 지원하게 혹은 지원하지 않게 설정할수 있음
                */
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR','last 2 chrome versions'],
                            // 해당 코드는 한국에서 브라우저 점유율이 5%가 넘는것들을 지원해줌
                        },
                        debug: true, // 개발용에서는 이런 옵션도 있음
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
        path: path.join(__dirname, 'dist'), // 실제 경로는 C:... 이지만 path.join를 사용함으로서 현재 폴더의 dist폴더를 말함(경로를 알아서 합쳐줌) 
        filename: 'app.js'
    }, // 출력
};