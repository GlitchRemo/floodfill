const { up, down, left, right } = require("../lib/navigation.js");
const { includes } = require("../lib/array-utils.js");

const kanamachi = (current, visited, boundaries) => {
  if (includes(current, visited) || includes(current, boundaries)) {
    return visited;
  }

  visited.push(current);

  kanamachi(up(current), visited, boundaries);
  kanamachi(down(current), visited, boundaries);
  kanamachi(left(current), visited, boundaries);
  kanamachi(right(current), visited, boundaries);

  return visited;
};

exports.kanamachi = kanamachi;
