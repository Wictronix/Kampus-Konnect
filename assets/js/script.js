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

  selector.css("right", "100%");
  selector.removeClass("shown");
});

// Close the mobile nav when clicking on a link
$(".header .header__nav a").on("click", function () {
  var selector = $(".header .header__nav");

  selector.css("right", "100%");
  selector.removeClass("shown");
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

  // Close the mobile menu after clicking a link
  var selector = $(".header .header__nav");
  selector.css("right", "100%");
  selector.removeClass("shown");
});

$(window).on("scroll", () => {
  let scrollPosition = window.innerHeight - $(".header-1").outerHeight();
  if ($(window).scrollTop() <= scrollPosition) {
    $(".header-1").removeClass("fixed").css({ bottom: "0", top: "unset" });
  } else {
    $(".header-1").addClass("fixed").css({ bottom: "unset", top: "0" });
  }
});

/********************
testimonial
********************/
/*
$(".testimonial__wrapper").on("mouseover click", (e) => {
  if ($(e.target).is("img")) {
    let parentElement = $(e.target).parent().parent();
    //console.log(parentElement);
    parentElement.addClass("active");
    if (parentElement.siblings().hasClass("active")) {
      parentElement.siblings().removeClass("active");
    }
  }
});*/

/********************
clients slider
********************/
/*
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
*/
/********************
related post slider
********************/
/*
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
});*/

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
/*
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
*/
/********************
youtube defer
********************/
/*
window.addEventListener("load", ytdefer_setup);
*/
/********************
Pop-up
********************/
/*
const modal = document.getElementById("featureModal");
const learnMoreBtn = document.getElementById("learnMoreBtn");
const closeBtn = document.getElementsByClassName("close")[0];
*/
function toggleOpacity() {
  let elements = document.getElementsByClassName("toggled");
  for (let element = 0; element < elements.length; element++) {
    let currentOpacity = window.getComputedStyle(elements[element]).opacity;
    elements[element].style.opacity = currentOpacity === "0" ? "1" : "0";
  }
}

/*
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
});*/

// Dark & Light toggle

let btnstatus = 0;
function toggleBtn0() {
  btnstatus = 0;
  updatebtn();
}
function toggleBtn1() {
  btnstatus = 1;
  updatebtn();
}
function updatebtn() {
  let visibility = document.getElementsByClassName("form-optional");
  if (btnstatus == 0) {
    for (let i = 0; i < visibility.length; i++) {
      visibility[i].classList.remove("form-hidden");
    }
  } else {
    for (let i = 0; i < visibility.length; i++) {
      visibility[i].classList.add("form-hidden");
    }
  }
}

function counter() {
  let start = 0;
  function updateCounter() {
    let cnter = document.getElementsByClassName("counter")[0];
    if (start < 49000) {
      start += 1000;
      cnter.textContent = start;
      setTimeout(updateCounter, 25);
    }
  }
  updateCounter();
}

document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    let targetDiv = document.getElementById("step");

    if (targetDiv) {
      let observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("Div is in view!");
              slidestep();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(targetDiv);
    }
    const section = document.getElementById("about");
    const tds = document.querySelectorAll("td");

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tds.forEach((td) => {
              td.classList.add("animate");
            });
            setTimeout(counter, 1000);
          } else {
            tds.forEach((td) => {
              td.classList.remove("animate");
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (section) {
      observer2.observe(section);
    }
  }
});

function slidestep() {
  const track = document.querySelector(".step-carousel__track");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slides = document.querySelectorAll(".step__box_small");
  const totalSlides = slides.length;
  let index = 1;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalSlides - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = document.querySelectorAll(".step__box_small");
  const slideWidth = slides[0].offsetWidth;

  track.style.transform = `translateX(${-slideWidth * index}px)`;

  function updateSlide() {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  function nextSlide() {
    if (index >= allSlides.length - 1) return;
    index++;
    updateSlide();

    if (index === allSlides.length - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        index = 1;
        track.style.transform = `translateX(${-slideWidth * index}px)`;
      }, 500);
    }
  }
  setInterval(nextSlide, 5000);

  nextButton.addEventListener("click", function () {
    if (index >= allSlides.length - 1) return;
    index++;
    updateSlide();

    if (index === allSlides.length - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        index = 1;
        track.style.transform = `translateX(${-slideWidth * index}px)`;
      }, 500);
    }
  });

  prevButton.addEventListener("click", function () {
    if (index <= 0) return;
    index--;
    updateSlide();

    if (index === 0) {
      setTimeout(() => {
        track.style.transition = "none";
        index = totalSlides;
        track.style.transform = `translateX(${-slideWidth * index}px)`;
      }, 500);
    }
  });
}
