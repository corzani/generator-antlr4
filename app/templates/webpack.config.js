var antlr4Plugin = require('antlr4-webpack-plugin');

module.exports = {
    entry: "./lib/antlr4-core/index",
    output: {
        filename: "./dist/bundle.js",
        library: ["ANTLR"] // Global variable name
    },
    devtool: "source-map",
    node: {
        fs: "empty"
    },
    plugins: [
        antlr4Plugin({
            grammar: 'grammars/JSON.g4',
            options: {
                o: 'dist/', //output directory
                grammarLevel: {
                    language: 'JavaScript' //generated code language
                }

            }
        })
        // or more grammars

        /*
        antlr4Plugin({
        grammar: 'grammars/C.g4',
        options: {
            o: 'dist/', //output directory
            grammarLevel: {
                language: 'JavaScript' //generated code language
            }
        }
        }),
        antlr4Plugin({
            grammar: 'grammars/CPP14.g4',
            options: {
                o: 'dist/', //output directory
                grammarLevel: {
                    language: 'JavaScript' //generated code language
                }
            }
        })],
        */
        ],
    resolve: {
        alias: {
            'antlr4/index': '../../node_modules/antlr4/index.js'
        },
        modulesDirectories: [
            './node_modules'
        ]
    }
};
