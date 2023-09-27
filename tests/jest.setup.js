const nearley = require("nearley");

const grammar = require("../pine.ne");
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

global.parse = (input) => {
  return () => {
    const col = parser.save();
    parser.feed(input);
    const results = parser.results;
    parser.restore(col);
    return results[0][0];
  };
};
