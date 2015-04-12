module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: {
          'dist/js/perfmatters.js': ['src/js/perfmatters.js'],
          'dist/views/js/main.js': ['src/views/js/main.js'],
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          'dist/css/print.css':['src/css/print.css'],
          'dist/css/style-480.css':['src/css/style-480.css'],
          'dist/css/style.css':['src/css/style.css'],
          'dist/views/css/style.css':['src/views/css/style.css'],
          'dist/views/css/bootstrap-grid.css':['src/views/css/bootstrap-grid.css'],
        }]
      }
    },
    htmlmin: {
      dev: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'src/index.html',
          'dist/project-2048.html': 'src/project-2048.html',
          'dist/project-mobile.html': 'src/project-mobile.html',
          'dist/project-webperf.html': 'src/project-webperf.html',
          'dist/views/pizza.html': 'src/views/pizza.html'
        }
      }
    }
  });

  // JS min
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // CSS min
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // HTML min
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin','htmlmin']);

};