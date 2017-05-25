var gulp = require('gulp'), //подключаем пакеты Gulp из папки node_modules в наш проект
    less = require('gulp-less'), //Подключаем Less пакет
    watch = require('gulp-watch'), //Подключаем watch пакет
    browserSync = require('browser-sync'); //Подключаем browser-sync пакет

gulp.task('less', function () { // Создаем таск "sass"
  return gulp.src('app/less/**/*.less') // Берем все Less-файлы из папки less и дочерних, если таковые будут
    .pipe(less()) // Преобразуем less в CSS посредством gulp-less
    .pipe(gulp.dest('./app/css')); // Выгружаем результата в папку app/css
    .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('watch', ['browser-sync', 'less'] function () {
  gulp.watch('app/less/**/*less', ['less']); // Наблюдение за less-файлами
    //add watch for Наблюдения за другими типами файлов
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
  browserSync({ // Выполняем browser Sync
    server: { // Определяем параметры сервера
      baseDir: 'app' // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  });
});
