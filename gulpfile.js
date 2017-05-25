var gulp = require('gulp'), //подключаем пакеты Gulp из папки node_modules в наш проект
    less = require('gulp-less'), //Подключаем Less пакет
    watch = require('gulp-watch');

gulp.task('less', function () { // Создаем таск "sass"
  return gulp.src('app/less/**/*.less') // Берем все Less-файлы из папки less и дочерних, если таковые будут
    .pipe(less()) // Преобразуем less в CSS посредством gulp-less
    .pipe(gulp.dest('./dist/css')); // Выгружаем результата в папку app/css
});

gulp.task('watch', function () {
  gulp.watch('app/less/**/*less', ['less']); // Наблюдение за less-файлами
    //add watch for Наблюдениz за другими типами файлов
});
