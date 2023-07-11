const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const ans = document.getElementById("ans");
const btn = document.getElementById("btn");
const cul = document.getElementById("cul");

btn.addEventListener("click", () => {
    if (cul.value == "add") {
        ans.value = Number(num1.value) + Number(num2.value);
    }
    if (cul.value == "sub") {
        ans.value = Number(num1.value) - Number(num2.value);
    }
    if (cul.value == "mal") {
        ans.value = Number(num1.value) * Number(num2.value);
    }
    if (cul.value == "divi") {
        ans.value = Number(num1.value) / Number(num2.value);
    }
});
