@{%
	const moo = require("moo")
	const lexer = moo.compile({
	  ws: /[ \t]+/,
	  primeinch: /\"/,
	  primefoot: /\'/,
	  fract: /\//,
	  number: /[0-9]+/,
	  word: /[a-z]+/
	});
%}

@lexer lexer

main -> measurement 

measurement -> foot | inch
foot -> int "'"
inch -> int %ws fraction %primeinch | int %ws fraction | fraction %primeinch | fraction | int "\"" | int
fraction -> int "/" int
int -> %number:*
