module.exports = {
    // Only one parser and lexer are needed using this example
    parsers: require('../../dist/grammars/JSONParser'),
    lexers: require('../../dist/grammars/JSONLexer') ,
    lib: require('../../node_modules/antlr4')
};
