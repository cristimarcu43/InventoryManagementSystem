const toggleBtn = document.getElementById("toogleBtn");
const sidebarMenu = document.querySelector(".dashboard_sidebar");
const contentContainer = document.querySelector(".dashboard_content_container");

toggleBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const isHidden = sidebarMenu.classList.contains("hidden");
  if (isHidden) {
    sidebarMenu.classList.remove("hidden");
    contentContainer.classList.remove("expanded");
  } else {
    sidebarMenu.classList.add("hidden");
    contentContainer.classList.add("expanded");
  }
});
