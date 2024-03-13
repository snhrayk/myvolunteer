const moreMenu = document.querySelector(".moreMenu");
const moreBtn = document.querySelector(".moreBtn");

moreBtn.addEventListener("click", () => {
  if (moreMenu.style.display === "block") {
    moreMenu.style.display = "none";
    moreBtn.classList.remove("rotated");
  } else {
    moreMenu.style.display = "block";
    moreBtn.classList.add("rotated");
  }
});
