// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

	const moo = require("moo")
	const lexer = moo.compile({
	  ws: /[ \t]+/,
	  primeinch: /\"/,
	  primefoot: /\'/,
	  fract: /\//,
	  number: /[0-9]+/,
	  word: /[a-z]+/
	});
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "main", "symbols": ["measurement"]},
    {"name": "measurement", "symbols": ["foot"]},
    {"name": "measurement", "symbols": ["inch"]},
    {"name": "foot", "symbols": ["int", {"literal":"'"}]},
    {"name": "inch", "symbols": ["int", (lexer.has("ws") ? {type: "ws"} : ws), "fraction", (lexer.has("primeinch") ? {type: "primeinch"} : primeinch)]},
    {"name": "inch", "symbols": ["int", (lexer.has("ws") ? {type: "ws"} : ws), "fraction"]},
    {"name": "inch", "symbols": ["fraction"]},
    {"name": "inch", "symbols": ["int", {"literal":"\""}]},
    {"name": "inch", "symbols": ["int"]},
    {"name": "fraction", "symbols": [(lexer.has("number") ? {type: "number"} : number), {"literal":"/"}, (lexer.has("number") ? {type: "number"} : number)]},
    {"name": "int$ebnf$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1", (lexer.has("number") ? {type: "number"} : number)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1"]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
