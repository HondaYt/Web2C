const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const ans = document.getElementById("ans");
const btn = document.getElementById("btn");
const cal = document.getElementById("cal");

btn.addEventListener("click", () => {
    if (cal.value == "add") {
        ans.value = Number(num1.value) + Number(num2.value);
    }
    else if (cal.value == "sub") {
        ans.value = Number(num1.value) - Number(num2.value);
    }
    else if (cal.value == "mal") {
        ans.value = Number(num1.value) * Number(num2.value);
    }
    else if (cal.value == "divi") {
        ans.value = Number(num1.value) / Number(num2.value);
    }
    else {
        ans.value = "error";
    }
});
