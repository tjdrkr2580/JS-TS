process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    let str = "";
    for (let j = 0; j < a; j++) {
      str += "*";
    }
    console.log(str);
  }
});

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     let star = "*".repeat(a);
//     for(let i = 0 ; i < b ; i++){
//         console.log(star);
//     }
// });
