const {
    resolve
} = require('path');
//引入html打包的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './js/app.js', //输出文件名
        path: resolve(__dirname, 'dist') //输出文件路径配置
    },
    module: {
        rules: [
            //处理css
            {
                test: /\.css$/, // 检查文件是否以.less结尾（检查是否是less文件）
                use: [ // 数组中loader执行是从下到上，从右到左顺序执行
                    'style-loader', // 创建style标签，添加上js中的css代码
                    'css-loader' // 将css以commonjs方式整合到js文件中
                ]
            },
            //处理less
            {
                test: /\.less$/, //找到项目中引入的所有的css文件
                use: ['style-loader', 'css-loader', 'less-loader'] // 先将less转成css. css-loader将css转成commonjs的形式.然后使用style-loader将样式添加到页面上
            },
            //js的语法检查eslint
            {
                test: /\.js$/, //只检测js文件
                exclude: /node_modules/, //排除node_modules文件夹
                enforce: "pre", //提前加载使用 1. pre 优先处理 2. normal 正常处理（默认)3. inline 其次处理 4. post 最后处理
                use: { //使用eslint-loader解析
                    loader: "eslint-loader"
                }
            },
            //es6 -> es5
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage', // 按需引入(需要使用polyfill)
                                    corejs: {
                                        version: 3
                                    }, // 解决warning警告
                                    targets: { // 指定兼容性处理哪些浏览器
                                        "chrome": "58",
                                        "ie": "9",
                                    }
                                }
                            ]
                        ],
                        cacheDirectory: true // 开启babel缓存
                    }
                }
            },
            //打包样式文件中的图片资源 file-loader打包图片，url-loader将图片转为base64字符串
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // 是否转为base64的界定值
                        outputPath: './imgs', // 决定了打包后的文件放在那里
                        publicPath: '../dist/imgs', // 声明打包之后的文件,访问这个文件的时候的路径
                        name: '[hash:5].[ext]' // 将打包后的图片,重命名
                    }
                }]
            },
            //打包html中的图片资源img
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            //打包其他资源（字体图标）
            {
                test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/,  // 处理其他资源
                loader: 'file-loader',
                options: {
                  outputPath: 'media',
                  name: '[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        //打包html文件
        new HtmlWebpackPlugin({
            template: './src/index.html', // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
        })
    ],
    devServer: {
        open: true, // 自动打开浏览器
        compress: true, // 启动gzip压缩
        port: 3000, // 端口号
        hot: true // 开启热模替换功能 HMR(开启后不需要更新所有类型的模块)
      },
      devtool: 'cheap-module-eval-source-map' // 开发环境下
}