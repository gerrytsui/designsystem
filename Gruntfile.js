// Generated on 2014-02-11 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      less: 'less',
      app: require('./bower.json').appPath || 'app',
      preview: 'app/live_preview',
      dist: 'dist'
    },

    // Watches files for changes and runs tasks based on the changed files

    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      theme: {
        files: ['<%= yeoman.less %>/{,*/}*.less'],
        tasks: ['less:theme' /*, 'newer:copy:styles'*/ ]
      },
      js: {
        files: ['<%= yeoman.preview %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all']
      },
      preview: {
        files: ['<%= yeoman.preview %>/less/{,*/}*.less'],
        tasks: ['less:preview' /*, 'newer:copy:styles'*/ ]
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.preview %>/{,*/}*.html',
          '<%= yeoman.preview %>/views/*/*.html',
          '<%= yeoman.preview %>/partials/*/*.html',
          '<%= yeoman.preview %>/scripts/*/*.js',
          '.tmp/dist/css/*.css',
          '.tmp/live_preview/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        //hostname: 'localhost',
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
        force: true
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/live_preview/scripts/**/*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'fonts',
        hashes: false,
        destCss: 'less',
        options: {
          font: 'pbfont',
          hashes: false,
          htmlDemo: false,
          stylesheet: 'less',
          relativeFontPath: '',
          templateOptions: {
            baseClass: 'pbfont',
            classPrefix: 'pb-',
            mixinPrefix: 'pb_'
          }
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    //'bower-install': {
    //  app: {
    //    html: '<%= yeoman.app %>/index.html',
    //    ignorePath: '<%= yeoman.app %>/'
    // }
    //},



    //LESS
    less: {
      theme: {
        options: {
          sourceMap: true,
          sourceMapFilename: '.tmp/dist/css/theme.css.map',
          sourceMapURL: 'theme.css.map',
          outputSourceFiles: true
        },
        files: [{
          ".tmp/dist/css/theme.css": "<%= yeoman.less %>/theme.less"
        }]
      },
      preview: {
        options: {
          sourceMap: true,
          sourceMapFilename: '.tmp/live_preview/styles/main.css.map',
          sourceMapURL: 'main.css.map',
          outputSourceFiles: true
        },
        files: [{
          ".tmp/live_preview/styles/main.css": "<%= yeoman.preview %>/less/main.less"
        }]
      },
      distTheme: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          sourceMap: true,
          sourceMapFilename: '<%= yeoman.dist %>/dist/css/theme.css.map',
          sourceMapURL: 'theme.css.map',
          outputSourceFiles: true
        },
        files: [{
          "<%= yeoman.dist %>/dist/css/theme.css": "<%= yeoman.less %>/theme.less"
        }]
      }
    },


    //ftp-deploy
    'ftp-deploy': {
      staging: {
        auth: {
          host: '10.50.8.173',
          port: 21,
          authKey: 'staging' //from .ftppass file in root directory
        },
        src: 'dist',
        dest: '',
        exclusions: [
          '.svn'
        ]
      },
      live: {
        auth: {
          host: '10.50.8.173',
          port: 21,
          authKey: 'live' //from .ftppass file in root directory
        },
        src: 'dist',
        dest: '',
        exclusions: [
          '.svn'
        ]
      }
    },



    // Renames files for browser caching purposes
    // rev: {
    //   dist: {
    //     files: {
    //       src: [
    //         '<%= yeoman.dist %>/scripts/{,*/}*.js',
    //         '<%= yeoman.dist %>/styles/{,*/}*.css',
    //         '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
    //         '<%= yeoman.dist %>/styles/fonts/*'
    //       ]
    //     }
    //   }
    // },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      //html: '<%= yeoman.app %>/live_preview/index.html',
      html: 'app/live_preview/index.html',
      options: {
        //dest: '.tmp'
        dest: 'dist/live_preview'
        //dest: '.tmp/concat'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      //html: ['<%= yeoman.dist %>/{,*/}*.html'],
      html: ['dist/live_preview/index.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/live_preview/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/live_preview/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/live_preview/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/live_preview/images'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/live_preview',
          src: ['*.html', 'views/**/*.html', 'partials/**/*.html'],
          dest: '<%= yeoman.dist %>/live_preview'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    // cdnify: {
    //   dist: {
    //     html: ['<%= yeoman.dist %>/*.html']
    //   }
    // },

    // Copies remaining files to places other tasks can use
    copy: {
      //styles: {
      //expand: true,
      //cwd: '<%= yeoman.previewB %>/styles',
      //dest: '.tmp/styles/',
      //src: '{,*/}*.css'
      //},
      fonts: {
        expand: true,
        cwd: 'fonts',
        src: '*.*',
        dest: '.tmp/dist/fonts'
      },
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/live_preview',
          dest: '<%= yeoman.dist %>/live_preview',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'partials/{,*/}*.html',
            'scripts/data/*.js',
            'images/{,*/}*.{webp}',
            'vendor/**'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'fonts',
          src: '*.*',
          dest: '<%= yeoman.dist %>/dist/fonts'
        }, {
          expand: true,
          cwd: 'fonts',
          src: '*.*',
          dest: '<%= yeoman.dist %>/live_preview/fonts'
        }, {
          expand: true,
          cwd: 'app/bower_components/font-awesome/fonts',
          src: '*.*',
          dest: '<%= yeoman.dist %>/dist/fonts'
        }, {
          expand: true,
          cwd: 'app/bower_components/font-awesome/fonts',
          src: '*.*',
          dest: '<%= yeoman.dist %>/live_preview/fonts'
        }]
      }
    },


    // Run some tasks in parallel to speed up the build process
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      server: [
        //'copy:styles'
      ],
      test: [
        //'copy:styles'
      ],
      dist: [
        //'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }

  });


  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'webfont',
      'less:theme',
      'less:preview',
      'copy:fonts',
      'concurrent:server',
      'autoprefixer',
      'jshint:all',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', function(target) {

    grunt.task.run([
      'clean:dist',
      'webfont',
      'less:preview',
      'less:distTheme',
      'useminPrepare',
      'concurrent:dist',
      'concat',
      'ngmin',
      'copy:dist',
      'uglify',
      'cssmin',
      'usemin',
      'autoprefixer',
      //'cdnify',
      //'rev',
      'htmlmin'
    ]);

    if (target === 'staging') {
      return grunt.task.run(['ftp-deploy:staging']);
    }
    else if (target === 'live') {
      return grunt.task.run(['ftp-deploy:live']);
    }

  });


  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};