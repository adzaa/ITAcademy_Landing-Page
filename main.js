const image = document.getElementById("mobile-icon");
const mobileMenu = document.getElementById("mobile-menu");

image.addEventListener("click", function () {
  const computedStyle = getComputedStyle(mobileMenu);
  if (computedStyle.display === "none") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "none";
  }
});
