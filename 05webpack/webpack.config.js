const { resolve } = require('path')
module.exports = {
  entry: './src/js/app.js',//目录是相对于当前文件而言的
  output: {
    filename: './js/app.js',
    path: resolve(__dirname, 'dist')
  }
}
