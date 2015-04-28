'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

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
    }
  });
  //this runs a jshint test in our dev sources
  grunt.registerTask('test', ['jshint:dev']);
  /*this allows you to define the 'grunt' command as a 
  command to execute the jshint:dev labeled test, which is listed in the array. For now, we are only using our 'test' task which we created on line 25*/
  grunt.registerTask('default', ['test']);
};