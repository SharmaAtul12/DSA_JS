/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (ops) {
  let n = ops.length;
  let record = [];

  for (let i = 0; i < n; i++) {
    if (ops[i] === "+") {
      let lastVal = record.pop();
      let secondLastVal = record.pop();

      record.push(secondLastVal);
      record.push(lastVal);
      record.push(secondLastVal + lastVal);
    } else if (ops[i] === "C") {
      record.pop();
    } else if (ops[i] === "D") {
      let lastVal = record.pop();
      let newScore = 2 * lastVal;

      record.push(lastVal);
      record.push(newScore);
    } else {
      record.push(Number(ops[i]));
    }
  }

  let ans = 0;
  if (record.length) {
    let len = record.length;

    for (let i = 0; i < len; i++) {
      ans = ans + record.pop();
    }
  }
  return ans;
};
