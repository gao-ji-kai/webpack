//webpack是node写出来的  需要用node写法
//node核心模块  内置 不需要安装
let path = require('path');
console.log(path.resolve('build'))
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer: {//开发服务器配置
        port: 3000,//指定端口号
        progress: true,//打包进度条是否显示
        contentBase: './build',//指向文件打包目录
        compress: true,//启动压缩
    },
    mode: 'production',//模式  默认production development
    entry: './src/index.js',//入口 从哪个地方开始打包  可以写相对路径
    output: {//出口
        filename: 'bundle.[hash:8].js',
        //打包后的文件名  如果想要每次生成的文件不一样 就加[hash] [hash:8]只显示几位数
        path: path.resolve(__dirname, 'build'),//打包后文件放在哪  绝对路径
    },
    plugins: [//放着所有webpack插件
        //类  new
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "index.html",
            minify: {
                removeAttributeQuotes: true,//删除html文件中的双引号
                collapseWhitespace: true, //折叠空行  就是将代码写在一行上
            },
            hash: true,//配哈希戳
        })
    ],
    module: {//模块
        rules: [
            //规则    css-loader  帮我们处理css文件 负责解析@import这种语法
            //style-loader  它可以把css 插到head标签中   
            //loader特点  希望功能单一   一个loader只负责一个功能功能 
            //loader的用法  字符串只能用一个loader  多个loader需要数组 []
            //loader的顺序，默认从右向左执行  从下到上执行
            //loader 还可以写成  对象方式   好处是 可以传参  
            //use:[{loader:'style-loader',option:{}}]
            {
                //还可以处理less文件
                test: /\.css$/, use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insert: 'top'//如果想让自己写的样式层级最高  需要配置此项
                        }
                    },
                    'css-loader']
            },
            {
                //还可以处理less文件 sass stylus node-sass sass-loader
                //stylus stylus-loader
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insert: 'top'//如果想让自己写的样式层级最高  需要配置此项
                        }
                    },
                    'css-loader',//解析@import路径
                    'less-loader'//将less -> css
                ]
            }
        ]
    }
}