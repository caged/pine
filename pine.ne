
main -> measurement 

measurement -> foot | inch
foot -> int "'"
inch -> int _f _ int _ fraction _i  # 1' 5 1/2"
	| int _f _ int _i  								# 1' 5"
	| int _f _ fraction _i 						# 1' 1/2"
	| int _ fraction _f 							# 1 1/2'
	| int _ fraction _i 							# 1 1/2"
	| int _ fraction 									# 1 1/2
	| fraction _i 										# 1/2"
	| fraction 												# 1/2
	| int _i  												# 1"
	| int 														# 1
fraction -> int "/" int 
int -> [0-9]:+ {% ([a, b]) => { return {v: a }} %}
_i -> [\"]
_f => "'"
_ -> [\s]:* {% (d) => null %}