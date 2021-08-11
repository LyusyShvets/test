console.log("Start");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".bell-1").style.backgroundColor = "#1f232f";
  document.querySelector(".bell-2").style.backgroundColor = "#1f232f";
  document.querySelector(".bell-3").style.backgroundColor = "#1f232f";

  setTimeout(() => {
    document.querySelector(".bell-1").style.backgroundColor =
      "rgb(249, 176, 30)";
  }, 1500);
  setTimeout(() => {
    document.querySelector(".bell-2").style.backgroundColor =
      "rgb(249, 176, 30)";
  }, 500);
  setTimeout(() => {
    document.querySelector(".bell-3").style.backgroundColor =
      "rgb(249, 176, 30)";
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  let burger = document.querySelector("#menuButton");
  let menu = document.querySelector("#menu");

  burger.addEventListener("click", () => {
    console.log("burger clicked!");
    burger.classList.toggle("burger--open");
    menu.classList.toggle("menu--open");
  });
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Animation on scroll
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}
