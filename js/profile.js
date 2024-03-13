const btn = document.querySelector(".more");
const lockWrap = document.querySelector(".lockWrap");

btn.addEventListener("click", () => {
  console.log("clicked");
  if (lockWrap.style.height === "34vh") {
    lockWrap.style.height = "0vh";
    lockWrap.style.opacity = "100";
    btn.classList.add("rotated");
    setTimeout(() => {
      btn.innerText = "さらに表示";
    }, 500);
  } else {
    lockWrap.style.height = "34vh";
    btn.classList.remove("rotated");
    setTimeout(() => {
      btn.innerText = "閉じる";
    }, 500);
  }
});
