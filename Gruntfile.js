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
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist',
            less: '<%= yeoman.app %>/less',
            preview: 'live_preview'

        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            // bower: {
            //     files: ['bower.json'],
            //     tasks: ['bowerInstall']
            // },
            theme: {
                files: ['<%= yeoman.app %>/{,*/}*.less'],
                tasks: ['less:theme' /*, 'newer:copy:styles'*/ ]
            },
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: true
                }
            },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    'tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
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
                    base: [
                        'tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        'tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: 'live_preview'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js'
            ],
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'tmp',
                        '.tmp',
                        '<%= yeoman.dist %>',
                        '<%= yeoman.preview %>/**/*.*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: {
                files: [{
                    dot: true,
                    src: [
                        'tmp',
                        '.tmp'
                    ]
                }]
            }
        },

        //LESS
        less: {
            theme: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: 'tmp/styles/theme.css.map',
                    sourceMapURL: 'theme.css.map',
                    outputSourceFiles: true
                },
                files: [{
                    "tmp/styles/theme.css": "<%= yeoman.less %>/theme.less"
                }]
            },
            preview: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: 'tmp/styles/live_preview.css.map',
                    sourceMapURL: 'live_preview.css.map',
                    outputSourceFiles: true
                },
                files: [{
                    "tmp/styles/live_preview.css": "<%= yeoman.less %>/live_preview.less"
                }]
            },
            dist: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapFilename: '<%= yeoman.dist %>/css/theme.css.map',
                    sourceMapURL: 'theme.css.map',
                    outputSourceFiles: true
                },
                files: [{
                    "<%= yeoman.dist %>/css/theme.css": "<%= yeoman.less %>/theme.less"
                }]
            }
        },



        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version', 'ie 8']
            },

            files: {
                expand: true,
                flatten: true,
                src: 'tmp/styles/{,*/}*.css',
                dest: 'tmp/styles/'
            }

        },

        // Automatically inject Bower components into the app
        // bowerInstall: {
        //     app: {
        //         src: ['<%= yeoman.app %>/index.html'],
        //         ignorePath: '<%= yeoman.app %>/'
        //     }
        // },

        // Renames files for browser caching purposes
        // rev: {
        //     dist: {
        //         files: {
        //             src: [
        //                 '<%= yeoman.dist %>/scripts/{,*/}*.js',
        //                 '<%= yeoman.dist %>/styles/{,*/}*.css',
        //                 '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
        //                 '<%= yeoman.dist %>/styles/fonts/*'
        //             ]
        //         }
        //     }
        // },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.preview %>'
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.preview %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'] //,
            // options: {
            //     assetsDirs: ['<%= yeoman.dist %>']
            // }
        },

        // The following *-min tasks produce minified files in the dist folder
        // cssmin: {
        //     options: {
        //         root: '<%= yeoman.app %>'
        //     }
        // },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.preview %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.preview %>/images'
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
                    cwd: '<%= yeoman.preview %>',
                    src: ['*.html', 'views/**/*.html', 'partials/**/*.html'],
                    dest: '<%= yeoman.preview %>'
                }]
            }
        },

        // ngmin tries to make the code safe for minification automatically by
        // using the Angular long form for dependency injection. It doesn't work on
        // things like resolve or inject so those have to be done manually.
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



        // Copies remaining files to places other tasks can use
        copy: {
            fonts: {
                expand: true,
                cwd: 'fonts',
                src: '*.*',
                dest: '<%= yeoman.dist %>/fonts'
            },
            dist: {
                files: [{
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.preview %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            '*.html',
                            'views/{,*/}*.html',
                            'partials/{,*/}*.html',
                            'images/{,*/}*.{webp}',
                            'scripts/data/*.js',
                            'fonts/*',
                            'vendor/**'
                        ]
                    },
                    /*{
                    expand: true,
                    cwd: 'tmp/images',
                    dest: '<%= yeoman.preview %>/images',
                    src: ['generated/*']
                }, */
                    {
                        expand: true,
                        cwd: 'fonts',
                        src: '*.*',
                        dest: '<%= yeoman.preview %>/fonts'
                    }, {
                        expand: true,
                        cwd: 'app/bower_components/font-awesome/fonts',
                        src: '*.*',
                        dest: '<%= yeoman.preview %>/fonts'
                    }, {
                        expand: true,
                        cwd: 'tmp/styles',
                        src: '*.*',
                        dest: '<%= yeoman.preview %>/styles'
                    }
                ]
            } //,
            // styles: {
            //     expand: true,
            //     cwd: '<%= yeoman.app %>/styles',
            //     dest: '<%= yeoman.preview %>/styles/',
            //     src: '{,*/}*.css'
            // }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                // 'copy:styles'
            ],
            test: [
                //  'copy:styles'
            ],
            dist: [
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
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/styles/live_preview': [
        //         'tmp/styles/{,*/}*.css',
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
            // 'bowerInstall',
            'concurrent:server',
            'less:theme',
            'less:preview',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function(target) {

        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        // grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        // grunt.task.run(['serve:' + target]);
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
            // 'bowerInstall',
            'less:dist',
            'useminPrepare',
            'concurrent:dist',
            'autoprefixer',
            'concat',
            'ngmin',
            'copy:dist',
            'uglify',
            'cssmin',
            // 'cdnify',
            //'rev',
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
        'test',
        'build'
    ]);
};