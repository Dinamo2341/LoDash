module.exports = function(grunt) {

    grunt.initConfig({
    watch: {
      sass: {
                      // We watch and compile sass files as normal but don't live reload here
        files: ['style/*.scss'],
        tasks: ['sass'],
        }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'style/main.css': 'style/style.scss'     // 'destination': 'source'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass', 'watch'])
};
