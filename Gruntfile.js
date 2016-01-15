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
						src: ['app/bower_components/webcomponentsjs/webcomponents-lite.min.js'],
						dest: 'dist/javascripts/vendor'
					}, {
						expand: true,
						flatten: true,
						src: ['app/bower_components/polymer/polymer.html',
						      'app/bower_components/polymer/polymer-mini.html',
						      'app/bower_components/polymer/polymer-micro.html'],
						dest: 'dist/javascripts/vendor'
					}, {
						expand: true,
						flatten: true,
						src: ['app/stylesheets/partials/_base.scss'],
						dest: 'dist/stylesheets/partials'
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
					exclude: ['html5shiv', 'selectivizr', 'requirejs', 'angular', 'angular-route', 'google-code-prettify']
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
					insertRequire: ['app'],
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
		processhtml: {
			dev: {
				files: [{
					expand: true,
					cwd: 'app/html',
					src: ['**/*.html'],
					dest: '.tmp/html',
					ext: '.html'
				}],
				options: {
					recursive: true,
					data: {
						polymerPath: '/bower_components/polymer/polymer.html'
					}
				}
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'app/html',
					src: ['**/*.html'],
					dest: 'dist/html',
					ext: '.html'
				}, {
					expand: true,
					cwd: 'app/components',
					src: ['**/*.html'],
					dest: 'dist/components',
					ext: '.html'
				}],
				options: {
					recursive: true,
					data: {
						polymerPath: '/javascripts/vendor/polymer.html'
					}
				}
			}
		},
		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					cwd: 'app/images',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/images'
				}]
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				background: true
			}
		},
		connect: {
			dev: {
				options: {
					port: 9090,
					base: ['.tmp', '.tmp/html', 'node_modules', 'app'],
					open: 'http://localhost:9090/pattern-lib.html',
					livereload: true
				}
			},
			dist: {
				options: {
					port: 9091,
					base: ['dist', 'dist/html'],
					open: 'http://localhost:9091/pattern-lib.html',
					keepalive: true
				}
			}
		},
		watch: {
			html: {
				files: ['app/**/*.html'],
				tasks: ['processhtml:dev'],
				options: {
					livereload: true,
					spawn: false
				}
			},
			css: {
				files: ['app/stylesheets/**/*.scss'],
				tasks: ['compass:dev'],
				options: {
					livereload: true,
					spawn: false
				}
			},
			js: {
				files: ['app/javascripts/**/*.js'],
				options: {
					livereload: true,
					spawn: false
				}
			}
		}
	});

	// Tasks
	// The "default" task will create optimized CSS and JS, along with HTML, ready
	// for distribution in a "dist" folder.
	grunt.registerTask('default', ['clean:dist', 'copy:dist', 'compass:dist', 'cssmin', 'requirejs', 'processhtml:dist', 'imagemin']);

	// The "serve" task will start a local web server, and open the pattern library
	// in your default browser. You can make changes to your files and the browser
	// will refresh showing the latest changes.
	grunt.registerTask('serve', ['clean:dev', 'copy:dev', 'compass:dev', 'processhtml:dev', 'connect:dev', 'watch']);

	// The "serve-dist" task will start a local web server that uses the final,
	// optimized files.
	grunt.registerTask('serve-dist', ['clean:dist', 'copy:dist', 'compass:dist', 'cssmin', 'requirejs', 'processhtml:dist', 'imagemin', 'connect:dist']);

	// The "serve-test" task functions identically to the "serve" task, except that
	// it will also run Karma/Jasmine unit tests.
	grunt.registerTask('serve-test', function() {
		var watchConfig = {
			html: {
				files: ['app/html/**/*.html'],
				tasks: ['processhtml:dev'],
				options: {
					livereload: true,
				}
			},
			css: {
				files: ['app/stylesheets/**/*.scss'],
				tasks: ['compass:dev'],
				options: {
					livereload: true,
				}
			},
			karma: {
				files: ['app/javascripts/**/*.js', 'test/**/*.js'],
				tasks: ['karma:unit:run'],
				options: {
					atBegin: true,
					livereload: true
				}
			}
		};

		grunt.config('watch', watchConfig);

		grunt.task.run(['karma:unit:start', 'clean:dev', 'copy:dev', 'compass:dev', 'processhtml:dev', 'connect:dev', 'watch']);
	});
};
