/*
 * grunt-background-imager
 *
 * Copyright (c) 2013 Hector Parra (@hgparra)
 * Licensed under the MIT license.
 */

"use strict";

var bgi = require("background-imager");

module.exports = function(grunt) {
	grunt.registerMultiTask("background_imager", "reads images and produces responsive CSS classes", function() {

		var options = this.options({});

		// escape \t and \s properly
		if (options.tabSpacing) {
			options.tabSpacing = options.tabSpacing.replace(/\\t/gi, "\t").replace(/\\s/gi, " ");
		}

		var done = this.async();
		this.files.forEach(function(file) {

			var src = file.src.filter(function (filepath) {
				// HACK
				// we usd file.cwd even though expand should be false
				if (!grunt.file.exists(file.cwd, filepath)) {
					grunt.log.warn("Source file \"" + filepath + "\" not found.");
					return false;
				} else {
					return true;
				}
			});

			var success = true;

			// create media rules
			bgi.createMediaRules(src, file.cwd, options, function(err, mediaRules) {

				if (err) {
					grunt.fail.warn(err);
					success = false;
				}

				grunt.file.write(file.dest, bgi.generateCSS(mediaRules, options.tabSpacing));
				grunt.log.writeln("File \"" + file.dest.toString().cyan + "\" created.");

				done(success);
			});
		});
	});
};
