# grunt-background-imager

> Reads images and produces responsive CSS classes with [background-imager](https://github.com/hparra/background-imager)

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-background-imager --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-background-imager');
```

## The "background_imager" task

### Overview
In your project's Gruntfile, add a section named `background_imager` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  background_imager: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.urlPath
Type: `String`
Default value: `null`

A string value that is used to specfy URL path to image.

#### options.classPrefix
Type: `String`
Default value: `null`

A string value that is used to specify prefix for class names.

#### options.tabSpacing
Type: `String`
Default value: `"\s\s"`

A string value that is used to specify whitespace used in tabbing.

### Usage Examples

#### WARNING

Due to limitations in background-imager multi-level directory globbing is not supported. Explicit use of `expand: true` is not supported either. background-imager was designed to read a directory, not files, and will not traverse subdirectories. See https://github.com/hparra/background-imager/issues/10

Please use the following example:

```js
background_imager: {
	options: {
		urlPath: "/images/",
		classPrefix: "bg-",
		tabSpacing: "\t"
	},
	your_target: {
		files: [{
			//expand: true,							// DO NOT set expand true
			cwd: "src/images/",					// DO set cwd as intended (directory)
			src: ["*.{jpg,gif,png}"],
			dest: "./src/styles/less/background-images.less"
		}]
	}
}
```

This plugin will join `cwd` with `src` to check if files exist. `cwd` will also be used for `urlPath` unless another is specified in `options`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/). Editor Config included.

## Release History
v0.0.1: initial release

## License
Copyright (c) 2013 Hector Parra. Licensed under the MIT license.
