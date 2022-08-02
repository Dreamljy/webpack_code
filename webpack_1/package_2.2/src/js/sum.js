// Commont 语法
// module.exports.sum = (...args) => {
//   return args.reduce((p, c) => p + c, 0);
// }
// Es6 语法
export default function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}