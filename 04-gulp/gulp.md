 -- gulp
   - 是与webpack功能类似的前端项目构建工具，也是基于Nodejs的自动任务运行器
   - 可以自动完成avascript/coffee/sass/less/html/image/css 等文件的
  合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务
   - gulp更高效(异步多任务), 更易于使用, 插件高质量

  - 使用步骤
     * 安装nodejs(版本要在6以上)
     * 依赖包
       - 全局 npm install gulp-cli -g
       - 局部 npm install gulp --save-dev
     * 配置编码文件gulpfile.js -- 项目的根目录创建
       -- 内容
           * 引入模块 const gulp = require('gulp');
           * 定义任务 
              //定义默认任务
              gulp.task('任务名', function() {
                // 将你的任务的任务代码放在这
               });
     * 执行 
       - gulp 任务名


    -- 缺点

    -- 剩下的就是gulp中插件的使用，gulp是很干净的，需要使用什么就去下载插件即可(插件详细看md笔记中的gulp)
      * js常用的插件
        (1) 语法检查 gulp-jshint
           - 安装插件： npm install jshint gulp-jshint --save-dev
           - 引入jshint： const jshint = require('gulp-jshint')
        (2) 语法转换
           - 安装插件： npm install --save-dev gulp-babel @babel/core @babel/preset-env
           - 引入：const babel = require('gulp-babel');
           注：此时只是将es6经babel转换后变成了CommonJS规范，需要browserify再次转换
        (3) gulp-browserify转CommomJS
           -  安装插件： npm install --save-dev gulp-browserify
              安装插件（用于重命名）： npm install --save-dev gulp-rename
           - 引入：const browserify = require('gulp-browserify');
             引入：const rename = require('gulp-rename');
        (4) 压缩js
           - 安装插件： npm install --save-dev gulp-uglify
           - 引入插件： const uglify = require('gulp-uglify')
     
       * CSS常用的插件
        (1) 编译less文件、及使用less-plugin-autoprefix扩展前缀（解决兼容性问题）
           - 安装插件： npm install gulp-less 
           - 安装插件（用于扩展前缀，解决兼容性问题，会设置成往前兼容两个版本）：npm install less-plugin-autoprefix
           - 引入插件： const less = require('gulp-less');
           - 引入插件：const LessAutoprefix = require('less-plugin-autoprefix')
        
        (2) 合并css文件 gulp-concat
           - 安装插件： npm install --save-dev gulp-concat
           - 引入：const concat = require('gulp-concat');
        (3) 压缩css文件 gulp-cssmin
           - 安装插件：npm install --save-dev gulp-cssmin
           - 引入：const cssmin = require('gulp-cssmin');
        
        * 压缩html文件
           - 安装插件：npm install --save gulp-htmlmin
           - 引入：const htmlmin = require('gulp-htmlmin');

        * 任务
           (1) 配置默认任务，让多个任务依次执行
              - 定义默认任务：gulp.task('default', gulp.series('jshint', 'babel', 'browserify'))
           (2) 自动化配置（详情看md文件笔记）
              - 安装
                 npm install gulp-livereload --save-dev
                 npm install gulp-connect --save-dev
                 npm install opn --save-dev
              - 引入
                 const livereload = require('gulp-livereload');//监听
                 const connect = require('gulp-connect');//通过自己的服务打开浏览器
                 const opn = require('opn');//自动打开浏览器

       