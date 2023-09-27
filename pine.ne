measurement -> int _f _ int _ fraction _i 
    | int _f _ fraction _i   
	| int _f _ int _i  
	| int _f _ fraction  
	| int _ fraction _f 
	| int _ fraction _i 
	| int _ fraction 
	| fraction _i | fraction | int_f | int_i | int
fraction -> int "/" int {% ([a, b, c]) => [`${a}/${c}`, a / c] %}
int_f -> int _f {% ([a, b]) => [`${a}${b}`, a * 12] %}
int_i -> int _i {% ([a, b]) => [`${a}${b}`, a] %}
int -> [0-9]:+ {% d => parseInt(d[0].join('')) %}
_i -> [\"] {% id %}
_f -> "'" {% id %}
_ -> [\s]:* {% (d) => null %}