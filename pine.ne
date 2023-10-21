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
		intf _ intd _ fraction _i {% ([a, b, c, d, e]) => a + c + e  %} # 1' 1 1/2"
  | intf _ intd _ fraction {% ([a, b, c, d, e]) => a + c + e  %} 		# 1' 1 1/2
  | intf _ fraction _i   {% ([a, b, c]) => a + c  %} 								# 1' 1/2"
	| intf _ inti  {% ([a, b, c]) => a + c  %} 												# 1' 1"
	| intf _ intd  {% ([a, b, c]) => a + c  %} 												# 1' 1 
	| intf _ fraction  {% ([a, b, c]) => a + c  %} 										# 1' 1/2
	| intd _ fraction _f {% ([a, b, c]) => (a * 12) + (c * 12)  %} 		# 1 1/2'
	| intd _ fraction _i {% ([a, b, c]) => a + c  %} 									# 1 1/2"
	| intd _ fraction {% ([a, b, c]) => a + c  %} 										# 1 1/2
	| fraction _f {% ([a]) => a * 12  %} 															# 1/2'
	| fraction _i {% ([a]) => a  %} 																	# 1/2"
	| fraction {% id %} 																							# 1/2
	| intf {% id %} 																									# 1'
	| inti {% id %} 																									# 1"
	| intd {% id %} 																									# 1

# Primeless fractions: 1/2
fraction -> intd "/" intd {% ([a, b, c]) =>  a / c %}

# Integers: 1, 1", 1'
intf -> intd _f {% ([a, b]) => a * 12 %}
inti -> intd _i {% ([a, b]) => a %}
intd -> [0-9]:+ {% ([a]) => parseInt(a.join('')) %}

# Whitespace and prime marks
_i -> [\"] | [\”] {% id %}
_f -> "'" | "’" {% id %}
__ -> [\s]:+ {% (d) => null %}
_ -> [\s]:* {% (d) => null %}

