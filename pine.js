// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "main", "symbols": ["_", "as", "_"], "postprocess": ([a, b, c]) => b},
    {"name": "as", "symbols": ["mp", "__", {"literal":"+"}, "__", "as"], "postprocess": ([a, b, c, d, e]) => a + e},
    {"name": "as", "symbols": ["mp", "__", {"literal":"-"}, "__", "as"], "postprocess": ([a, b, c, d, e]) => a - e},
    {"name": "as", "symbols": ["mp"], "postprocess": id},
    {"name": "mp", "symbols": ["p", "__", {"literal":"*"}, "__", "mp"], "postprocess": ([a, b, c, d, e]) => a * e},
    {"name": "mp", "symbols": ["p", "__", {"literal":"/"}, "__", "mp"], "postprocess": ([a, b, c, d, e]) => a / e},
    {"name": "mp", "symbols": ["p"], "postprocess": id},
    {"name": "p", "symbols": ["measurement"], "postprocess": id},
    {"name": "p", "symbols": [{"literal":"("}, "_", "as", "_", {"literal":")"}], "postprocess": ([a, b, c]) => c},
    {"name": "measurement", "symbols": ["intf", "_", "intd", "_", "fraction", "_i"], "postprocess": ([a, b, c, d, e]) => a + c + e},
    {"name": "measurement", "symbols": ["intf", "_", "intd", "_", "fraction"], "postprocess": ([a, b, c, d, e]) => a + c + e},
    {"name": "measurement", "symbols": ["intf", "_", "fraction", "_i"], "postprocess": ([a, b, c]) => a + c},
    {"name": "measurement", "symbols": ["intf", "_", "inti"], "postprocess": ([a, b, c]) => a + c},
    {"name": "measurement", "symbols": ["intf", "_", "intd"], "postprocess": ([a, b, c]) => a + c},
    {"name": "measurement", "symbols": ["intf", "_", "fraction"], "postprocess": ([a, b, c]) => a + c},
    {"name": "measurement", "symbols": ["intd", "_", "fraction", "_f"], "postprocess": ([a, b, c]) => (a * 12) + (c * 12)},
    {"name": "measurement", "symbols": ["intd", "_", "fraction", "_i"], "postprocess": ([a, b, c]) => a + c},
    {"name": "measurement", "symbols": ["intd", "_", "fraction"], "postprocess": ([a, b, c]) => a + c},
    {"name": "measurement", "symbols": ["fraction", "_f"], "postprocess": ([a]) => a * 12},
    {"name": "measurement", "symbols": ["fraction", "_i"], "postprocess": ([a]) => a},
    {"name": "measurement", "symbols": ["fraction"], "postprocess": id},
    {"name": "measurement", "symbols": ["intf"], "postprocess": id},
    {"name": "measurement", "symbols": ["inti"], "postprocess": id},
    {"name": "measurement", "symbols": ["intd"], "postprocess": id},
    {"name": "fraction", "symbols": ["intd", {"literal":"/"}, "intd"], "postprocess": ([a, b, c]) =>  a / c},
    {"name": "intf", "symbols": ["intd", "_f"], "postprocess": ([a, b]) => a * 12},
    {"name": "inti", "symbols": ["intd", "_i"], "postprocess": ([a, b]) => a},
    {"name": "intd$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "intd$ebnf$1", "symbols": ["intd$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "intd", "symbols": ["intd$ebnf$1"], "postprocess": ([a]) => parseInt(a.join(''))},
    {"name": "_i", "symbols": [/[\"]/]},
    {"name": "_i", "symbols": [/[\”]/], "postprocess": id},
    {"name": "_f", "symbols": [{"literal":"'"}]},
    {"name": "_f", "symbols": [{"literal":"’"}], "postprocess": id},
    {"name": "__$ebnf$1", "symbols": [/[\s]/]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": (d) => null},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": (d) => null}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
