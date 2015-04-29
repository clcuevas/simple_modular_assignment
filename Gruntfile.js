'use strict';

module.exports = function(grunt) {
  //loads/enables the jshint package
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //loads/enables the mocha package
  grunt.loadNpmTasks('grunt-simple-mocha');
  //enable watch task to track changed files and run test
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'greet*.js', 'test/**/*.js']
      },
      options: {
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true,
          after: true,
          beforeEach: true,
          afterEach: true
        }
      }
    },
    simplemocha: {
      dev: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      app: {
        files: ['<%= jshint.dev.src %>', '<%= simplemocha.dev.src %>'],
        tasks: ['jshint', 'simplemocha']
      }
    }
  });
  //this runs a jshint test task in our dev sources
  grunt.registerTask('test', ['jshint:dev']);
  //this runs a mocha test task
  grunt.registerTask('mocha', ['simplemocha:dev']);
  /*this allows you to define the 'grunt' command as a 
  command to execute the jshint:dev labeled test, which is listed in the array. For now, we are only using our 'test' task which we created on line 25*/
  grunt.registerTask('default', ['test', 'mocha', 'watch']);
};