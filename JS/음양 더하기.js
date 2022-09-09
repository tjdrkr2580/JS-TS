function solution(absolutes, signs, sum = 0) {
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (sum += absolutes[i]) : (sum -= absolutes[i]);
  }
  return sum;
}
