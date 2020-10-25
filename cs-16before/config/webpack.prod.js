const {
  resolve
} = require('path'); //node内置核心模块，用来设置路径。
//引入打包html文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//提取css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');	
module.exports = {
  // entry: './src/js/app.js',   // 入口文件配置（简写）
  entry: ['./src/js/app.js', './src/index.html'], //html文件无法自动更新了，需要增加一个入口
  /*完整写法：
  entry:{
    main:'./src/js/app.js'
  }
  */
  output: { // 输出配置
    filename: './js/app.js', // 输出文件名
    path: resolve(__dirname, '../dist') //输出文件路径配置
  },
  mode: 'production', //开发环境(二选一)
  module: {
    rules: [
      //引入css
      {
        test: /\.css$/, // 检查文件是否以.css结尾（检查是否是css文件）
        use: [ // 数组中loader执行是从下到上，从右到左顺序执行
          'style-loader', // 创建style标签，添加上js中的css代码
          'css-loader' // 将css以commonjs方式整合到js文件中
        ]
      },
      //引入less
      {
        test: /\.less$/,
        use: [
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
                    flexbox: 'no-2009',// display:flex之前个时期写的是display:flexbox. 这种写法现在不用了.所以要写no-2009
                  },
                  stage: 3, // 兼容性程度: 0, 1, 2, 3 值越大,表示兼容的程度越高
                }),
                require('postcss-normalize')(),
              ],
              sourceMap: true, //也要生成一个map文件
            },
          },
          'less-loader',
        ]
      },
      /* {
        test: /\.less$/, // 检查文件是否以.less结尾（检查是否是less文件）
        use: [ // 数组中loader执行是从下到上，从右到左顺序执行
          MiniCssExtractPlugin.loader, // 创建style标签，添加上js中的css代码
          'css-loader', // 将css以commonjs方式整合到js文件中
          'less-loader' // 将less文件解析成css文件
        ]
      }, */
      //eslint检查
      {
        test: /\.js$/, //只检测js文件
        exclude: /node_modules/, //排除node_modules文件夹
        enforce: "pre", //提前加载使用 1. pre 优先处理 2. normal 正常处理（默认)3. inline 其次处理 4. post 最后处理
        use: { //使用eslint-loader解析
          loader: "eslint-loader"
        }
      },
      //语法转换
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      //按需引入
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          // 注意: presets是一个数组,里面又套了一个数组
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
            cacheDirectory: true, // 开启babel缓存
          }
        }
      },
      //打包样式文件中的图片资源
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192, // 8kb --> 8kb以下的图片会base64处理
            outputPath: 'imgs', // 决定文件本地输出路径
            publicPath: '../imgs', // 决定图片的url路径
            name: '[hash:8].[ext]' // 修改文件名称 [hash:8] hash值取8位  [ext] 文件扩展名
          }
        }
      },
      //打包html中的图片资源
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      //打包其他资源
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
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      cssProcessorOptions: { // 解决没有source map问题
        map: {
          inline: false,
          annotation: true,
        }
      }
    })
  ],
  devtool: 'cheap-module-eval-source-map' // 开发环境下
};