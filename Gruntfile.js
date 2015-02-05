module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            src: 'src/html/',
            js: 'src/html/js/',
            dest: 'src/html/dest/'
        },
        mkdir: {
            all: {
                options: {
                    create: ['<%= dirs.src %>', '<%= dirs.js %>', '<%= dirs.dest %>']
                }
            }
        },
        copy: {
            main: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                cwd: 'bower_components/vue/dist/',
                src: ['*.min.js'],
                dest: '<%= dirs.js %>'
            }
        },
        port: 55555,
        connect: {
            livereload: {
                options: {
                    open: true,
                    port: '<%= port %>',
                    livereload: 35729,
                    hostname: 'localhost',
                    base: [ '<%= dirs.src %>' ]
                }
            }
        },
        watch: {
            //files: ['<%= dirs.src %>/js/*.js'],
            files: [
                '<%= dirs.src %>/**/*.js',
                '<%= dirs.src %>/**/*.css',
                '<%= dirs.src %>/**/*.html'
            ],
            reload: {
                options: {
                    livereload: '<%= connect.livereload %>'
                },
                files: [
                    '<%= dirs.src %>/**/*.js',
                    '<%= dirs.src %>/**/*.css',
                    '<%= dirs.src %>/**/*.html'
                ]
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', 'Build start!', [
        'mkdir',
        'copy',
        'connect',
        'watch'
    ]);

    grunt.registerTask('sum', function () {
        var args = Array.prototype.slice.call(arguments);
        var total = 0;
        for (var i = 0, l = args.length; i < l; i++) {
            total += Number(args[i]);
        }
        grunt.log.writeln('total : ' + total);
    });
};