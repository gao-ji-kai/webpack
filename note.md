##安装webpack
1.本地安装wepack
    webpack webpack-cli -D
webpack可以0配置
    -打包工具 -> 输出最后的结果（js模块）
安装完事儿 可以使用webpack5.2版本支持的npx语法  npx webpack
    npx webpack执行  内部会做  
    1.默认会去node_modules/bin/webpack.cmd 会进行判断  当前文件夹里有没有node.exe文件  没有 去到node_modules/webpack/bin//wepack.js模块

打包（支持我们js的模块化）
mode  默认 porduction  会压缩代码  development  不会压缩代码

上手动配置webpack
-默认配置文件 webpack.config.js
可以更改默认配置文件名   比如  webpack.config-my.js 这是运行命令就是npx webpack --config webpack.config-my.js
    如果嫌没回都打这么长的命令  可以在package.json中设置 "scripts":{"bulid"："webpack --config webpack.config-my.js"}  配置好 运行打包  就直接输入npm run build 就好    