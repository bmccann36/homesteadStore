/*
  This Gruntfile was generated by IBM DevOps Services.
  
  Grunt dependencies are required in the package.json
  file in order to build. Add the following devDependencies entries
  to your package.json file:
  
   "devDependencies": {
     "grunt": "~0.4.x",
     "grunt-contrib-jshint": "~0.7.2",
     "grunt-contrib-uglify": "^0.4.0",
     "grunt-contrib-concat": "^0.4.0",
     "grunt-contrib-qunit": "^0.5.0",
     "grunt-contrib-watch": "^0.6.1"
   }
   
*/
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['routes/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // A test task.  Uncomment to use if you have tests
  // grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['concat', 'uglify']);

};

