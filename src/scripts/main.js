// import sayHello from './utils/sayHello';
// sayHello();

import { preloadImages, preloadFonts } from "./utils/utils";
import gsap from "gsap";

import LocomotiveScroll from "locomotive-scroll";

const backtopEl = document.querySelector(".backtop");
const headerEl = document.querySelector("#header");

const playVideoInterval = () => {
  const video = document.querySelector("#bg-video");
  video.play();

  setTimeout(function () {
    video.style.opacity = "0";
  }, 1000);

  const interval = setInterval(function () {
    video.style.opacity = "0.35";
    video.play();
    setTimeout(function () {
      video.style.opacity = "0";
    }, 1000);
  }, 5000);
};

// Preload  images and fonts
Promise.all([preloadImages(".tiles__line-img"), preloadFonts("rmd7deq")]).then(
  () => {
    // Remove loader (loading class)
    document.body.classList.remove("loading");
    const scroller = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    // scroll.on("call", (func) => {
    //   console.log(func);
    // });
    // backtopEl.addEventListener("click", () => scroll.scrollTo(headerEl));

    playVideoInterval();
    test();
  }
);
