var src = {
        "a": 1,
        "b": "a simple string"
    },
    lexer = new ANTLR.lexers.JSONLexer(new ANTLR.lib.InputStream(JSON.stringify(src))),
    parser = new ANTLR.parsers.JSONParser(new ANTLR.lib.CommonTokenStream(lexer)),
    tree = parser.json();

document.getElementById('content').innerHTML = tree.toStringTree();
