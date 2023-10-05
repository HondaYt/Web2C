const output = document.querySelector("#output");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  output.textContent = input.value;
  input.value = "";
});
