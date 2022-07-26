// Commont 语法
module.exports.sum = (...args) => {
  return args.reduce((p, c) => p + c, 0);
}
