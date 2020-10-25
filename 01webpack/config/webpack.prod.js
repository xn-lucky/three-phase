const {
    resolve
} = require('path');
//引入html打包的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入 提取css成单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    // entry: './src/js/app.js',
    entry: {
        haha: './src/js/app.js'
    },
    output: {
        filename: './js/app.js', //输出文件名
        path: resolve(__dirname, '../dist') //输出文件路径配置
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
                use:[MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
              /*   use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                require('postcss-preset-env')({
                                    autoprefixer: {
                                        flexbox: 'no-2009', // display:flex之前个时期写的是display:flexbox. 这种写法现在不用了.所以要写no-2009
                                    },
                                    stage: 3, // 兼容性程度: 0, 1, 2, 3 值越大,表示兼容的程度越高
                                }),
                                require('postcss-normalize')(),
                            ],
                            sourceMap: true, //也要生成一个map文件
                        },
                    },
                    'less-loader',
                ] */
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
                        publicPath: '../imgs', // 声明打包之后的文件,访问这个文件的时候的路径
                        name: '[hash:8].[ext]' // 将打包后的图片,重命名
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
                test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/, // 处理其他资源
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
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        })

    ],
    devtool: 'cheap-module-source-map' // 开发环境下
}