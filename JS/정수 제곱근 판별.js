// sqrt 사용 전 사용 후
// function solution(n) {
//   var answer = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i * i == n) {
//       answer = (i + 1) ** 2;
//       break;
//     }
//   }
//   return answer === 0 ? -1 : answer;
// }

function solution(n) {
  if (Number.isInteger(Math.sqrt(n))) return Math.pow(Math.sqrt(n) + 1, 2);
  else return -1;
}
