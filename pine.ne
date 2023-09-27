measurement -> 
		intf _ intd _ fraction _i {% ([a, b, c, d, e]) => a + c + e  %}
  | intf _ intd _ fraction {% ([a, b, c, d, e]) => a + c + e  %}
  | intf _ fraction _i   {% ([a, b, c]) => a + c  %}
	| intf _ inti  {% ([a, b, c]) => a + c  %}
	| intf _ fraction  {% ([a, b, c]) => a + c  %}
	| intd _ fraction _f {% ([a, b, c]) => a + (c * 12)  %}
	| intd _ fraction _i {% ([a, b, c]) => a + c  %}
	| intd _ fraction {% ([a, b, c]) => a + c  %}
	| fraction _f {% ([a]) => a * 12  %}
	| fraction _i {% ([a]) => a  %}
	| fraction {% id %} | intf {% id %} | inti {% id %} | intd {% id %}
fraction -> intd "/" intd {% ([a, b, c]) =>  a / c %}
intf -> intd _f {% ([a, b]) => a * 12 %}
inti -> intd _i {% ([a, b]) => a %}
intd -> [0-9]:+ {% ([a]) => parseInt(a.join('')) %}
_i -> [\"] {% id %}
_f -> "'" {% id %}
_ -> [\s]:* {% (d) => null %}