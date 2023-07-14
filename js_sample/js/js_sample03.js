const arr = new Array();
// const arr = [];
console.log(arr);

arr[0] = 10;
arr[1] = 20;
arr[2] = 40;
arr[3] = 100;
console.log(arr.length);

//連想配列
const arr2 = [];
arr2["name"] = "takimoto";
arr2["age"] = 30;
arr2["hobby"] = "sports";
console.log(arr2);

let ans = 0;

// for(1,2,3){}
// 1:カウンタ変数 2:繰り返す条件 3:カウンタを増やす（減らす）
// ans = arr[0] + arr[1] + arr[2];

for (let i = 0; i < arr.length; i++) {
    // 繰り返し条件が満たされるまで内容を繰り返す
    console.log(`${i + 1}回実施`);
    // ans = ans + arr[i];
    ans += arr[i];
}

console.log(ans);

const btn = document.getElementsByClassName("btn");
const text = document.getElementById("text");
console.log(text)

// btn[0] = "hello1";
// btn[1] = "hello2";
// btn[2] = "hello3";
// console.log(btn);

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (evt) => {
        console.log(evt.target);
        // text.innerText = "hello";
        text.innerText = `${evt.target.innerText}が押されました`;
    });
}

// btn.addEventListener("click", () => {
//     console.log("hello")
// });
