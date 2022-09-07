function solution(phone_number) {
  let phone = phone_number.split("");
  let answer = [];
  for (let i = 0; i < phone.length; i++) {
    if (i < phone.length - 4) answer[i] = "*";
    else answer[i] = phone[i];
  }
  return answer.join("");
}
