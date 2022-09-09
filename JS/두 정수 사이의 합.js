function solution(a, b) {
  let result = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

//여기서 더 간결하게

function solution(a, b, s = 0) {
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
