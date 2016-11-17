module.exports = {
    // Only one parser and lexer are needed using this example
    parsers: require('../../dist/JSONParser'),
    lexers: require('../../dist/JSONLexer') ,
    lib: require('../../node_modules/antlr4')
};
