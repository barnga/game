const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssImporter = require('node-sass-css-importer')({
  import_paths: ['./scss']
});

gulp.task('sass', function () {
  return gulp.src(['src/assets/scss/theme.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: [cssImporter]
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', gulp.parallel(['sass']));