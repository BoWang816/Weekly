/**
 * gulpfile.js
 * @author wangbo
 * @since 2020/11/22
 */
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const htmlMin = require('gulp-htmlmin')
const htmlClean = require('gulp-htmlclean')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

// minify js - babel（ 如果不是使用bebel,把下面註釋掉）
gulp.task('compress', () =>
    gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify().on('error', function (e) {
            console.log(e)
        }))
        .pipe(gulp.dest('./public'))
)

// css
gulp.task('minify-css', () => {
    return gulp.src('./public/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./public'))
})

// 壓縮 public 目錄內 html
gulp.task('minify-html', () => {
    const options = {
        removeComments: true, // 清除 HTML 註釋
        collapseWhitespace: true, // 壓縮 HTML
        collapseBooleanAttributes: true, // 省略布爾屬性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, // 刪除所有空格作屬性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, // 刪除 <script> 的 type="text/javascript"
        removeStyleLinkTypeAttributes: true, // 刪除 <style> 和 <link> 的 type="text/css"
        minifyJS: true, // 壓縮頁面 JS
        minifyCSS: true, // 壓縮頁面 CSS
        minifyURLs: true
    };

    return gulp.src('./public/**/*.html')
        .pipe(htmlClean())
        .pipe(htmlMin(options))
        .pipe(gulp.dest('./public'))
})

// 壓縮 public/uploads 目錄內圖片
gulp.task('minify-images', async () => {
    gulp.src('./public/img/**/*.*')
        .pipe(imagemin({
            optimizationLevel: 5, // 類型：Number  預設：3  取值範圍：0-7（優化等級）
            progressive: true, // 類型：Boolean 預設：false 無失真壓縮jpg圖片
            interlaced: false, // 類型：Boolean 預設：false 隔行掃描gif進行渲染
            multipass: false // 類型：Boolean 預設：false 多次優化svg直到完全優化
        }))
        .pipe(gulp.dest('./public/img'))
})


// 壓縮 public/uploads 目錄內圖片
gulp.task('minify-images', async () => {
    gulp.src('./public/img/**/*.*')
        .pipe(imagemin({
            optimizationLevel: 5, // 類型：Number  預設：3  取值範圍：0-7（優化等級）
            progressive: true, // 類型：Boolean 預設：false 無失真壓縮jpg圖片
            interlaced: false, // 類型：Boolean 預設：false 隔行掃描gif進行渲染
            multipass: false // 類型：Boolean 預設：false 多次優化svg直到完全優化
        }))
        .pipe(gulp.dest('./public/img'))
})

// 執行 gulp 命令時執行的任務
gulp.task('default', gulp.parallel(
    'compress', 'minify-css', 'minify-html', 'minify-images'
))
