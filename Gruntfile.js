module.exports = function(grunt) {
	'use strict';

	// Load dependencies
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			dev: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['app/bower_components/html5shiv/dist/html5shiv.min.js'],
						dest: '.tmp/javascripts/vendor'
					}, {
						expand: true,
						flatten: true,
						src: ['app/bower_components/selectivizr/selectivizr.js'],
						dest: '.tmp/javascripts/vendor'
					}
				]
			},
			dist: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['app/bower_components/html5shiv/dist/html5shiv.min.js'],
						dest: 'dist/javascripts/vendor'
					}, {
						expand: true,
						flatten: true,
						src: ['app/bower_components/selectivizr/selectivizr.js'],
						dest: 'dist/javascripts/vendor'
					}, {
						expand: true,
						flatten: true,
						src: ['app/stylesheets/partials/_base.scss'],
						dest: 'dist/stylesheets/partials'
					}, {
						expand: true,
						cwd: 'app/images',
						src: ['**'],
						dest: 'dist/images'
					}, {
						expand: true,
						cwd: 'app/fonts',
						src: ['**'],
						dest: 'dist/fonts'
					}, {
						expand: true,
						flatten: true,
						src: ['app/apple-touch-icon.png', 'app/favicon.ico'],
						dest: 'dist'
					}
				]
			}
		},
		clean: {
			dev: ['.tmp'],
			dist: ['.tmp', 'dist']
		},
		compass: {
			dev: {
				options: {
					sassDir: 'app/stylesheets',
					cssDir: '.tmp/stylesheets',
					outputStyle: 'expanded'
				}
			},
			dist: {
				options: {
					sassDir: 'app/stylesheets',
					cssDir: '.tmp/stylesheets',
					outputStyle: 'compressed'
				}
			}
		},
		cssmin: {
			dist: {
				files: {
					'dist/stylesheets/main.css': ['app/bower_components/normalize-css/normalize.css', '.tmp/stylesheets/main.css'],
					'dist/stylesheets/pattern-lib.css': ['app/bower_components/normalize-css/normalize.css', '.tmp/stylesheets/pattern-lib.css']
				}
			}
		},
		bower: {
			target: {
				rjsConfig: 'app/javascripts/main.js',
				options: {
					exclude: ['html5shiv', 'selectivizr', 'requirejs']
				}
			}
		},
		requirejs: {
			main: {
				options: {
					baseUrl: './app/javascripts',
					mainConfigFile: 'app/javascripts/main.js',
					name: 'app',
					out: 'dist/javascripts/built.js',
					include: ['../bower_components/almond/almond.js'],
					findNestedDependencies: true,
					optimize: 'uglify2',
					wrap: true,
					generateSourceMaps: true,
					preserveLicenseComments: false,
				}
			},
			patternLib: {
				options: {
					baseUrl: './app/javascripts/pattern-lib',
					mainConfigFile: 'app/javascripts/pattern-lib/main.js',
					name: 'pattern-app',
					out: 'dist/javascripts/pattern-lib/built.js',
					include: ['../../bower_components/almond/almond.js'],
					insertRequire: ['bootstrap'],
					optimize: 'uglify2',
					uglify2: {
						mangle: false
					},
					wrap: true,
					generateSourceMaps: true,
					preserveLicenseComments: false
				}
			}
		},
		express: {
			dev: {
				options: {
					port: 9090,
					hostname: '0.0.0.0',
					bases: ['.tmp', 'app'],
					open: 'http://localhost:9090/pattern-lib.html',
					livereload: true
				}
			},
			dist: {
				options: {
					port: 9091,
					hostname: '0.0.0.0',
					bases: ['dist'],
					open: 'http://localhost:9091/pattern-lib.html'
				}
			}
		},
		watch: {
			html: {
				files: ['app/**/*.html'],
				tasks: ['processhtml:dev'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['app/stylesheets/**/*.scss'],
				tasks: ['compass:dev'],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['app/javascripts/**/*.js'],
				options: {
					livereload: true
				}
			}
		},
		processhtml: {
			dev: {
				files: [{
					expand: true,
					cwd: 'app',
					src: ['*.html'],
					dest: '.tmp',
					ext: '.html'
				}, {
					expand: true,
					cwd: 'app/templates',
					src: ['*.html'],
					dest: '.tmp/templates',
					ext: '.html'
				}],
				options: {
					recursive: true
				}
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'app',
					src: ['*.html'],
					dest: 'dist',
					ext: '.html'
				}, {
					expand: true,
					cwd: 'app/templates',
					src: ['**/*.html'],
					dest: 'dist/templates',
					ext: '.html'
				}],
				options: {
					recursive: true
				}
			}
		}
	});

	// Tasks
	grunt.registerTask('default', ['clean:dist', 'copy:dist', 'compass:dist', 'cssmin', 'requirejs', 'processhtml:dist']);
	grunt.registerTask('serve', ['clean:dev', 'copy:dev', 'compass:dev', 'processhtml:dev', 'express:dev', 'watch']);
	grunt.registerTask('dist-serve', ['clean:dist', 'copy:dist', 'compass:dist', 'cssmin', 'requirejs', 'processhtml:dist', 'express:dist', 'express-keepalive']);
};
