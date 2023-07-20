document.addEventListener("DOMContentLoaded", function () {
  const allNavLlinkItems = document.querySelectorAll(".nav-link");
  const navlist = document.querySelector(".navbar-collapse ");

  allNavLlinkItems.forEach(item =>
    item.addEventListener("click", () => navlist.classList.remove("show"))
  );
});

console.log("lolollll");
