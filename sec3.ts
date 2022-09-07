function add(num1: number, num2: number): void {
  console.log(num1 + num2);
}

function hello(name?: string) {
  return 'Hello, ${name || "world"}';
}

const result = hello();
