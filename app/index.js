'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    this.log('Welcome to ' + chalk.red('generator-antlr4') + ' generator!');
  },
  writing: function () {
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath('./')
    );
  },
  install: function () {
    this.installDependencies({bower: false});
  }
});
