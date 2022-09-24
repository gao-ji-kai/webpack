//webpack是node写出来的  需要用node写法
//node核心模块  内置 不需要安装
let path = require('path');
console.log(path.resolve('build'))
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    mode: 'development',//模式  默认production development
    entry: './src/index.js',//入口 从哪个地方开始打包  可以写相对路径
    output: {//出口
        filename: 'bundle.[hash:8].js',
        //打包后的文件名  如果想要每次生成的文件不一样 就加[hash] [hash:8]只显示几位数
        path: path.resolve(__dirname, 'build'),//打包后文件放在哪  绝对路径
    },
    plugins: [//放着所有webpack插件
        //类  使用方法new
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "index.html",
            minify: {
                removeAttributeQuotes: true,//删除html文件中的双引号
                collapseWhitespace: true, //折叠空行  就是将代码写在一行上
            },
            hash: true,//配哈希戳


        })

    ]
}