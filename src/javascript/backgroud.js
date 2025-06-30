const background = document.querySelector(".background");

for (let i = 0; i < 150; i++) {
  const spanBlock = document.createElement("span");
  spanBlock.classList.add("span-block");
  background.appendChild(spanBlock);
}
