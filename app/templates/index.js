module.exports = {
    parser : require('./dist/grammars/CParser'),
    lexer : require('./dist/grammars/CLexer'),
    lib: require('./node_modules/antlr4')
}