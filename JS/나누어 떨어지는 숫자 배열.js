// function solution(arr, divisor, answer = []) {
//     for(let i = 0 ; i < arr.length ; i++) if(arr[i]%divisor === 0) answer.push(arr[i]);
//     return answer.length === 0 ? [-1] : answer.sort((a,b) => a-b);
// }

function solution(arr, divisor) {
  let answer = arr.filter((d) => d % divisor == 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
