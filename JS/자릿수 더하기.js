function solution(n) {
  let num = 0;
  String(n)
    .split("")
    .map((a) => (num += parseInt(a)));
  return num;
}
