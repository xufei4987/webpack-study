//相当于命令webpack 入口文件 出口文件
const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins:[
        //创建一个在内存中生成html的插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    //配置所有的第三方模块加载器
    module:{
        rules:[
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
        ]
    }
}