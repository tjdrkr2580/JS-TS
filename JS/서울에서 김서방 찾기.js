function solution(seoul, where = "") {
  seoul.map((a, i) => {
    if (a == "Kim") where = "김서방은 " + i + "에 있다";
  });
  return where;
}

// function solution(seoul) {
//     return "김서방은 "+ seoul.indexOf("Kim")+"에 있다"
// }
//무척이나 짧은 indexOf
