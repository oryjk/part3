const path = require('path')
const webpack_html_plugin = require('html-webpack-plugin')

module.exports = {
    //指定入口文件
    entry: './src/index.ts',
    //指定打包文件所在目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件
        filename: 'bundle.js'
    },
    //指定webpack打包时使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //指定规则生效的文件
                test: /\.ts/,
                //要使用的loader
                use: 'ts-loader',
                exclude: /node-modules/
            }
        ]
    },
    mode: 'development',

    plugins: [
        new webpack_html_plugin({
            template:'./src/index.html'
        }),
    ]
}