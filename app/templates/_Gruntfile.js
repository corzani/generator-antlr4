module.exports = function(grunt) {

grunt.initConfig({
  antlr4: {
    your_target: {
      grammar: 'grammars/C.g4',
      options: {
        o: 'dist', //output directory
                grammarLevel: {
                    language: 'JavaScript' //generated code language
                }
      },
    },
  },
});

grunt.loadNpmTasks('grunt-antlr4');
grunt.registerTask('default', ['antlr4']);

}
