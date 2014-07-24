module.exports = function(grunt) {
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
					'dist/stylesheets/main.css': ['app/bower_components/normalize-css/normalize.css', '.tmp/stylesheets/main.css']
				}
			}
		},
		bower: {
			target: {
				rjsConfig: 'app/javascripts/main.js',
				options: {
					exclude: ['html5shiv', 'selectivizr']
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: './app/javascripts',
					mainConfigFile: 'app/javascripts/main.js',
					name: 'app',
					out: 'dist/javascripts/built.js',
					include: ['../bower_components/almond/almond.js'],
					findNestedDependencies: true,
					optimize: 'uglify2',
					generateSourceMaps: true,
					preserveLicenseComments: false,
				}
			}
		},
		express: {
			dev: {
				options: {
					port: 9090,
					hostname: '0.0.0.0',
					bases: ['app', '.tmp'],
					open: true,
					livereload: true
				}
			},
			dist: {
				options: {
					port: 9091,
					hostname: '0.0.0.0',
					bases: ['dist'],
					open: true
				}
			}
		},
		watch: {
			html: {
				files: ['app/**/*.html'],
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
			dist: {
				files: {
					'dist/index.html': ['app/index.html']
				}
			}
		}
	});

	// Tasks
	grunt.registerTask('default', ['clean:dist', 'copy:dist', 'compass:dist', 'cssmin', 'requirejs', 'processhtml']);
	grunt.registerTask('serve', ['clean:dev', 'copy:dev', 'compass:dev', 'express:dev', 'watch']);
	grunt.registerTask('dist-serve', ['clean:dist', 'copy:dist', 'compass:dist', 'cssmin', 'requirejs', 'processhtml', 'express:dist', 'express-keepalive']);
};
