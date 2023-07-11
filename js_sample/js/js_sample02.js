console.log("1");
console.log(1);
console.log(1+1);
console.log("1" + "1");
console.log(1000*8);

// const wage = 1000;
let wage = 1000;

// console.log("時給は"+wage);
console.log(`時給は${wage}`);
wage = 1200;
console.log(`時給は${wage}`);

let numA = 10;
let numB = 2;
console.log(numA + numB);
console.log(numA - numB);
console.log(numA * numB);
console.log(numA / numB);
console.log(numA % numB);//余り

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const ans = document.getElementById("ans");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    ans.value = Number(num1.value) + Number(num2.value)
});