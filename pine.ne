main -> _ as _  {% ([a, b, c]) => b %} 

as -> mp __ "+" __ as {% ([a, b, c, d, e]) => a + e %} 
| mp __ "-" __ as {% ([a, b, c, d, e]) => a - e %}
| mp {% id %}

mp -> p __ "*" __ mp  {% ([a, b, c, d, e]) => a * e %} 
	| p __ "/" __ mp  {% ([a, b, c, d, e]) => a / e %}
	| p {% id %}

p -> measurement {% id %} 
    | "(" _ as _ ")" {% ([a, b, c]) => c %}

# All of the ways to write a measurement
measurement -> 
		intf _ intd _ fraction _i {% ([a, b, c, d, e]) => a + c + e  %}
  | intf _ intd _ fraction {% ([a, b, c, d, e]) => a + c + e  %}
  | intf _ fraction _i   {% ([a, b, c]) => a + c  %}
	| intf _ inti  {% ([a, b, c]) => a + c  %}
	| intf _ intd  {% ([a, b, c]) => a + c  %}
	| intf _ fraction  {% ([a, b, c]) => a + c  %}
	| intd _ fraction _f {% ([a, b, c]) => (a * 12) + (c * 12)  %}
	| intd _ fraction _i {% ([a, b, c]) => a + c  %}
	| intd _ fraction {% ([a, b, c]) => a + c  %}
	| fraction _f {% ([a]) => a * 12  %}
	| fraction _i {% ([a]) => a  %}
	| fraction {% id %} | intf {% id %} | inti {% id %} | intd {% id %}

# Primeless fractions: 1/2
fraction -> intd "/" intd {% ([a, b, c]) =>  a / c %}

# Integers: 1, 1", 1'
intf -> intd _f {% ([a, b]) => a * 12 %}
inti -> intd _i {% ([a, b]) => a %}
intd -> [0-9]:+ {% ([a]) => parseInt(a.join('')) %}

# Whitespace and prime marks
_i -> [\"] {% id %}
_f -> "'" {% id %}
_ -> [\s]:* {% (d) => null %}