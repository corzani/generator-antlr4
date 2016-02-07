var antlr4Plugin = require('antlr4-webpack-plugin');

module.exports = {
    //entry: {"./node_modules/antlr4/index.js",
    entry: "./index",
    output: {
        filename: "./dist/C.js",
        library: ["ANTLR"]
    },
    devtool: "source-map",
    node: {
        fs: "empty"
    },
    plugins: [antlr4Plugin({
        grammar: 'grammars/C.g4',
        options: {
            o: 'dist/', //output directory
            grammarLevel: {
                language: 'JavaScript' //generated code language
            }
        }
    })],
    resolve: {
        alias: {
            'antlr4/index': '../../node_modules/antlr4/index.js'
        },
        modulesDirectories: [
            './node_modules'
        ]
    }
};
