'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {

    // Have Yeoman greet the user.
    this.log(
      'Welcome to the doozie ' + chalk.red('generator-antlr-4') + ' generator!'
    );

  },

  writing: function () {
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath('./')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
