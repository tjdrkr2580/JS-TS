function solution(arr) {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!min) min = arr[i];
    if (min > arr[i]) min = arr[i];
  }
  return arr.length === 1 ? [-1] : arr.filter((num) => num !== min);
}

//   function solution(arr) {
//     return arr.length == 1 ? [-1] : arr.filter((a) => a !== Math.min(...arr));
//   }
//한줄코든데 시간이 오래걸림
