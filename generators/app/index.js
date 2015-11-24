'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  info: function() {
    this.log(this.yeoman);
    this.log('- Antl 4 Yeoman Generator -');
  },
  generateBasic: function() {
    this.template('_package.json', 'package.json');
    this.template('_gruntfile.js', 'Gruntfile.js');
    this.copy('grammars/C.g4','grammars/C.g4');
  },
  end: function() {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
