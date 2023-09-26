// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "main", "symbols": ["measurement"]},
    {"name": "measurement", "symbols": ["int", "_f", "_", "int", "_", "fraction", "_i"]},
    {"name": "measurement", "symbols": ["int", "_f", "_", "int", "_i"]},
    {"name": "measurement", "symbols": ["int", "_f", "_", "fraction", "_i"]},
    {"name": "measurement", "symbols": ["int", "_", "fraction", "_f"]},
    {"name": "measurement", "symbols": ["int", "_", "fraction", "_i"]},
    {"name": "measurement", "symbols": ["int", "_", "fraction"]},
    {"name": "measurement", "symbols": ["fraction", "_i"]},
    {"name": "measurement", "symbols": ["fraction"]},
    {"name": "measurement", "symbols": ["int", "_f"]},
    {"name": "measurement", "symbols": ["int", "_i"]},
    {"name": "measurement", "symbols": ["int"]},
    {"name": "fraction", "symbols": ["int", {"literal":"/"}, "int"]},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1"], "postprocess": ([a]) => { return { val: parseInt(a.join('')), str: a.join('') }}},
    {"name": "_i", "symbols": [/[\"]/]},
    {"name": "_f", "symbols": [{"literal":"'"}]},
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
