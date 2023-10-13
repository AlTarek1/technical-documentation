const codes = document.querySelectorAll("pre");

for (let i = 0; i < codes.length; i++) {
  let child = document.createElement("span");
  child.title = "Copy the Code";
  child.innerHTML = '<i class="fa-solid fa-clipboard"></i>';
  codes[i].append(child);
  child.addEventListener("click", (e) => {
    let text = codes[i].innerText;
    navigator.clipboard.writeText(text);
  });
}
