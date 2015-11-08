'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    this.log('Welcome to the stylish ' + chalk.red('Antlr4') + ' generator!');
  },
  scaffoldFolders: function(){
    mkdirp("grammars");
    mkdirp("dist");
  },
  install: function () {
    this.copy('_package.json', "package.json");
    this.copy('_Gruntfile.js', "Gruntfile.js");
    this.copy('grammars/C.g4', "grammars/C.g4");
    this.installDependencies();
  }
});
