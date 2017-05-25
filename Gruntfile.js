module.exports = function(grunt) {
  grunt.initConfig({
    // получить конфигурацию из package.json
    // так мы можем использовать штуки вроде name и version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // настройка autoprefixer для добавления вендорных префиксов
    autoprefixer: {
      build: {
        files: {
          'css/style.css': 'css/style.css'
        },
      },
    },

    // компиляция Less в CSS
   less: {
     build: {
       files: {
         'css/style.css': 'less/style.less'
       }
     }
   },

   // параметры cssmin для минимизации CSS-файлов
   cssmin: {
     options: {
       banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
     },
     build: {
       files: {
         'css/style.min.css': 'css/style.css'
       }
     }
   },

    // настройка jshint для валидации JS-файлов
    jshint: {
      options: {
        reporter: require('jshint-stylish') // используйте jshint-stylish для наглядного представления ошибок
      },
      // при запуске этой задачи анализируется файл Gruntfile.js и все JS-файлы в src
      build: ['Gruntfile.js', 'js/*.js']
    },

    // настройка uglify для минимизации JS-файлов
   uglify: {
     options: {
       banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
     },
     build: {
       files: {
         'js/magic.min.js': 'js/*.js'
       }
     }
   },

  // параметры watch для автообновления
  watch: {
    files: '*.html',
    // для стилей следим только за CSS и Less-файлами
    // и запускаем less и cssmin: {
    files: ['css/*.css', 'less/*.less'],
    tasks: ['less', 'autoprefixer', 'cssmin'],

    // для скриптов запускаем jshint и uglify
    scripts: {
      files: 'js/*.js',
      tasks: ['jshint', 'uglify']
    }
  },

  express: {
    all: {
      options: {
        bases: 'mishka-adaptive',
        livereload: true,
        open: 'http://127.0.0.1:8080/'
      }
    }
  },
  // clean cache command
		clean:["cache/*"]
});
// grunt.registerTask('default', 'lint less');
  // ===========================================================================
  // ЗАГРУЗКА ПЛАГИНОВ GRUNT ===================================================
  // ===========================================================================
  // мы можем их загрузить, только если они находятся в нашем package.json
  // убедитесь, что вы запустили npm install, чтобы наше приложение могло их найти
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');

  // ============= // СОЗДАЁМ ЗАДАЧИ ========== //
  //grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin', 'jshint', 'uglify']);
  grunt.registerTask('start', ['express', 'watch']);
};
