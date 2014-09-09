// Generated on 2014-05-06 using generator-angular 0.8.0
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
    //require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            less: '<%= yeoman.app %>/less',
            sass: '<%= yeoman.app %>/sass',
            dist: 'dist',
            build: 'live_preview'

        },

        // Watches files for changes and runs tasks based on the changed files
        // modified 7/29/14 to reload css without a page reload
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: [
                    '<%= yeoman.app %>/partials/{,*/}*.html',
                    '<%= yeoman.app %>/views/{,*/}*.html'
                ]
            },
            sass: {
            files: ['<%= yeoman.app %>/sass/{,*/}*.scss'],
                tasks: ['sass:app'],
                options: {
                    livereload: false
                }
            },
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js']
                // tasks: ['newer:jshint:all']
            },
            css: {
                files: ['app/styles/*.css'],
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        },

        sass: {
          app: {
            options: {
              style: 'compact',
              sourcemap: true
            },
            files: {
              '<%= yeoman.app %>/styles/design_system.css': '<%= yeoman.sass %>/design_system.scss',
              '<%= yeoman.app %>/styles/live_preview.css': '<%= yeoman.sass %>/live_preview.scss',
              '<%= yeoman.app %>/styles/ui-bootstrap.css': '<%= yeoman.sass %>/ui-bootstrap.scss',
              '<%= yeoman.app %>/styles/kendoui.css': '<%= yeoman.sass %>/kendoui.scss'
            }
          },
          livepreview: {
            options: {
              style: 'compact'
            },
            files: {
              '<%= yeoman.build %>/styles/design_system.css': '<%= yeoman.sass %>/design_system.scss',
              '<%= yeoman.build %>/styles/live_preview.css': '<%= yeoman.sass %>/live_preview.scss',
              '<%= yeoman.build %>/styles/ui-bootstrap.css': '<%= yeoman.sass %>/ui-bootstrap.scss',
              '<%= yeoman.build %>/styles/kendoui.css': '<%= yeoman.sass %>/kendoui.scss'
            }
          },
          dist: {
            options: {
              style: 'compressed'
            },
            files: {
              '<%= yeoman.dist %>/styles/design_system.css': '<%= yeoman.sass %>/design_system.scss',
              '<%= yeoman.dist %>/styles/ui-bootstrap.css': '<%= yeoman.sass %>/ui-bootstrap.scss',
              '<%= yeoman.dist %>/styles/kendoui.css': '<%= yeoman.sass %>/kendoui.scss'
            }
          }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '127.0.0.1',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: '<%= yeoman.app %>'
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
            livepreview: {
                options: {
                    open: true,
                    base: 'live_preview'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                force: true,
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/**'
            ],

        },


        // Empties folders to start fresh
        clean: {
            preview: ['build/**/*'],
            dist: ['dist/**/*']
        },
        cleanempty: {
            options: {
                folders: true
            },
            src: ['build/**', 'tmp/**']
        },



        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.build %>'
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.build %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'] //,
            // options: {
            //     assetsDirs: ['<%= yeoman.dist %>']
            // }
        },
        imagemin: {
            build: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.build %>/images'
                }]
            }
        },

        svgmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.build %>/images'
                }]
            }
        },

        htmlmin: {
            build: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.build %>',
                    src: ['*.html', 'views/**/*.html', 'partials/**/*.html'],
                    dest: '<%= yeoman.build %>'
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },
            all_css: {
                expand: true,
                flatten: true,
                src: '<%= yeoman.app %>/styles/*.css',
                dest: '<%= yeoman.build %> /styles/'
            },
        },

        // ngmin tries to make the code safe for minification automatically by
        // using the Angular long form for dependency injection. It doesn't work on
        // things like resolve or inject so those have to be done manually.
        ngmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },


        // Copies remaining files to places other tasks can use
        copy: {
            fonts: {
                expand: true,
                cwd: 'fonts',
                src: '*.*',
                dest: '<%= yeoman.dist %>/fonts'
            },
            build: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.build %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'views/{,*/}*.html',
                        'partials/{,*/}*.html',
                        'images/{,*/}*.{webp}',
                        'scripts/data/*.js',
                        'scripts/templates/*.html',
                        'scripts/controllers/templates/**/*.html',
                        'fonts/*',
                        'vendor/**'
                    ]
                }, {
                    expand: true,
                    cwd: 'fonts',
                    src: '*.*',
                    dest: '<%= yeoman.build %>/fonts'
                }, {
                    expand: true,
                    cwd: '<%= yeoman.app %>/styles/Bootstrap',
                    src: '*',
                    dest: '<%= yeoman.build %>/styles/Bootstrap'
                }]
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                // 'copy:styles'
            ],
            test: [
                //  'copy:styles'
            ],
            build: [
                //   'copy:styles',
                'imagemin',
                'svgmin'
            ]
        },

        //ftp-deploy
        'ftp-deploy': {
            staging: {
                auth: {
                    host: '10.50.8.173',
                    port: 21,
                    authKey: 'staging' //from .ftppass file in root directory
                },
                src: 'live_preview',
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
                src: 'live_preview',
                dest: '',
                exclusions: [
                    '.svn'
                ]
            }
        }


    });



    grunt.registerTask('serve', function(target) {
        // if specified, build the project and run from /live_preview
        if (target === 'livepreview') {
            return grunt.task.run(['build', 'connect:livepreview:keepalive']);
        }
        // otherwise, just process the CSS and run from /app
        grunt.task.run([
            'clean',
            'jshint',
            'sass:app',
            'sass:dist',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', function(target) {
        grunt.task.run([
            'clean',
            'jshint',
            'sass:livepreview',
            'sass:dist',
            'useminPrepare',
            'concurrent:build',
            'concat',
            'ngmin',
            'copy:build',
            'copy:fonts',
            'uglify',
            'cssmin',
            'usemin',
            'htmlmin'
        ]);

        if (target === 'staging') {
            return grunt.task.run(['ftp-deploy:staging']);
        } else if (target === 'live') {
            return grunt.task.run(['ftp-deploy:live']);
        }
    });

    grunt.registerTask('default', [
        'newer:jshint',
        'build'
    ]);
};
