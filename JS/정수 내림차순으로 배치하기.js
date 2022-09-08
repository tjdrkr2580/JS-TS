function solution(n) {
  return parseInt(
    String(n)
      .split("")
      .map((a) => Number(a))
      .sort()
      .reverse()
      .join("")
  );
}
