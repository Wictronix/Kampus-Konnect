/********************
transform
********************/
$(window).on("load", () => {
  let ua = navigator.userAgent.toLowerCase();
  let isSafari = false;
  try {
    isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(!window["safari"] || safari.pushNotification);
  } catch (err) {}
  isSafari =
    isSafari ||
    (ua.indexOf("safari") != -1 &&
      !(ua.indexOf("chrome") != -1) &&
      ua.indexOf("version/index.html") != -1);
  if (isSafari) {
    document
      .querySelector(":root")
      .style.setProperty("--transform-fix", "translateZ(0)");
  }
});

/********************
header
********************/
$(".header .header__bars").on("click", function () {
  var selector = $(".header .header__nav");

  if (selector.hasClass("shown")) {
    selector.css("right", "100%");
    selector.removeClass("shown");
  } else {
    selector.css("right", "0");
    selector.addClass("shown");
  }
});

$(".header .header__nav span").on("click", function () {
  var selector = $(".header .header__nav");

  if (selector.hasClass("shown")) {
    selector.css("right", "100%");
    selector.removeClass("shown");
  } else {
    selector.css("right", "0");
    selector.addClass("shown");
  }
});

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  let elementId = $(event.target).attr("href");
  if (elementId == "#") return;

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000,
    "swing"
  );
});
$(window).on("scroll", () => {
  if ($(window).scrollTop() <= 670) {
    $(".header-1").removeClass("fixed");
  } else {
    $(".header-1").addClass("fixed");
  }
});
$(window).on("scroll", () => {
  if ($(window).scrollTop() >= 1300) {
    $(".header-imp").addClass("highlight");
  } else {
    $(".header-imp").removeClass("highlight");
  }
});
/********************
Hero
********************/
const dynamic_text = [
  "Campus Management",
  "Timetable Automation",
  "Smart Information Hub",
  "Future-Ready Education",
  "Personal AI Tutor",
  "Seamless Administration",
];

let index = 0;
const dynamicTextElement = document.getElementById("hero-dynamic-text");

function initializeDynamicTextWidth() {
  const initialWidth = dynamicTextElement.offsetWidth;
  dynamicTextElement.style.width = `${initialWidth}px`;
}

window.addEventListener("load", initializeDynamicTextWidth);

setInterval(() => {
  dynamicTextElement.classList.add("text-disappear");
  setTimeout(() => {
    const currentWidth = dynamicTextElement.offsetWidth;

    index = (index + 1) % dynamic_text.length;
    dynamicTextElement.textContent = dynamic_text[index];

    const newWidth = dynamicTextElement.offsetWidth;

    dynamicTextElement.style.width = `${currentWidth}px`;

    dynamicTextElement.offsetHeight;

    dynamicTextElement.style.width = `${newWidth}px`;

    dynamicTextElement.classList.remove("text-disappear");
    dynamicTextElement.classList.add("text-appear");
    setTimeout(() => {
      dynamicTextElement.style.width = "";
    }, 500);
  }, 500);
}, 3000);

/********************
testimonial
********************/
$(".testimonial__wrapper").on("mouseover click", (e) => {
  if ($(e.target).is("img")) {
    let parentElement = $(e.target).parent().parent();
    //console.log(parentElement);
    parentElement.addClass("active");
    if (parentElement.siblings().hasClass("active")) {
      parentElement.siblings().removeClass("active");
    }
  }
});

/********************
clients slider
********************/
var clients = new Swiper(".clients-slider", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  breakpoints: {
    991.98: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

/********************
screenshot slider
********************/
const leftTexts = [
  "Modern",
  "Automated",
  "All Materials",
  "Smart",
  "Seamless Collaboration",
  "AI-Powered",
];

const rightTexts = [
  "UI",
  "Error-Free Scheduling",
  "in One Place",
  "Day Planner",
  "& Networking",
  "Student Support",
];
var screenshot = new Swiper(".screenshot-slider", {
  loop: true,
  slidesPerView: 4.75,
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".screenshot-nav-next",
    prevEl: ".screenshot-nav-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    991.98: {
      slidesPerView: 2.75,
    },
    1200: {
      slidesPerView: 3.25,
    },
    1350: {
      slidesPerView: 3.5,
    },
    1600: {
      slidesPerView: 3.9,
    },
    1800: {
      slidesPerView: 4.75,
    },
  },
  on: {
    slideChange: function () {
      // Get the active slide's index
      const activeIndex = this.realIndex; // Use `realIndex` to handle loop mode

      // Update the text in the red and blue boxes
      document.querySelector(".screenshot-text-left").textContent =
        leftTexts[activeIndex];
      document.querySelector(".screenshot-text-right").textContent =
        rightTexts[activeIndex];
    },
  },
});
screenshot.emit("slideChange");

/********************
related post slider
********************/
var related_post = new Swiper(".blog_related-slider", {
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: ".related-post-nav .screenshot-nav-next",
    prevEl: ".related-post-nav .screenshot-nav-prev",
  },
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    991.98: {
      slidesPerView: 2,
    },
  },
});

/********************
accordion
********************/
$(".card").on("hide.bs.collapse", function (e) {
  var parentId = $(e.target).parent().attr("id");
  $(`#${parentId} > .card-header > h5`).addClass("hidden");
});

$(".card").on("show.bs.collapse", function (e) {
  var parentId = $(e.target).parent().attr("id");
  $(`#${parentId} > .card-header > h5`).removeClass("hidden");
});

/********************
blog
********************/
$(".category__dropdown").on("click", (e) => {
  if (
    $(e.target).parents().hasClass("category__dropdown") &&
    !$(".category__dropdown-box").hasClass("shown")
  ) {
    $(".category__dropdown-box").addClass("shown");
  } else if (
    $(e.target).parents().hasClass("category__dropdown-info") &&
    $(".category__dropdown-box").hasClass("shown")
  ) {
    $(".category__dropdown-box").removeClass("shown");
  }
});
$(".date__dropdown").on("click", (e) => {
  if (
    $(e.target).parents().hasClass("date__dropdown") &&
    !$(".date__dropdown-box").hasClass("shown")
  ) {
    $(".date__dropdown-box").addClass("shown");
  } else if (
    $(e.target).parents().hasClass("date__dropdown-info") &&
    $(".date__dropdown-box").hasClass("shown")
  ) {
    $(".date__dropdown-box").removeClass("shown");
  }
});

$(window).on("click", (e) => {
  if (!$(e.target).parents().hasClass("category__dropdown")) {
    $(".category__dropdown-box").removeClass("shown");
  }
  if (!$(e.target).parents().hasClass("date__dropdown")) {
    $(".date__dropdown-box").removeClass("shown");
  }
});

$(".nav__dropdown-info").on("click", (e) => {
  let parentId = $(e.target).closest("li").attr("id");
  $(`#${parentId} > .nav__dropdown-box`).toggleClass("shown");
});

/********************
youtube defer
********************/
window.addEventListener("load", ytdefer_setup);

/********************
Pop-up
********************/
const modal = document.getElementById("featureModal");
const learnMoreBtn = document.getElementById("learnMoreBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const content = document.getElementsByClassName("hidden-text");

learnMoreBtn.addEventListener("click", function () {
  for (let i = 0; i < content.length; i++) {
    content[i].classList.toggle("hidden");
  }
});
learnMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
