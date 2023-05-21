const includes = ([a, b], list) => list.some(([c, d]) => a === c && b === d);

exports.includes = includes;
