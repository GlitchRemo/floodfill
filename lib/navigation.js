const up = ([y, x]) => [y + 1, x];
const down = ([y, x]) => [y - 1, x];
const left = ([y, x]) => [y, x - 1];
const right = ([y, x]) => [y, x + 1];

exports.up = up;
exports.down = down;
exports.left = left;
exports.right = right;
