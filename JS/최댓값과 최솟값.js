function solution(s, answer = []) {
  answer = s.split(" ");
  return String(Math.min(...answer) + " " + Math.max(...answer));
}
