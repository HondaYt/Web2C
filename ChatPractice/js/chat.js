const input = document.querySelector("#input");
const send = document.querySelector("#send");
const clear = document.querySelector("#clear");
const board = document.querySelector("#board");
let posts;

send.addEventListener("click", () => {
    posts = document.createElement("div");
    board.append(posts);
    posts.classList.add("posts");
    posts.textContent = input.value;
    console.log(input.value);
});

clear.addEventListener("click", () => {
    board.textContent = "";
    input.value = "";
});
