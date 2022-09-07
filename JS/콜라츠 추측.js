function solution(num) {
  let answer = 0;
  while (num != 1) {
    answer++;
    num % 2 ? (num = num * 3 + 1) : (num = num / 2);
  }
  return answer >= 500 ? -1 : answer;
}
