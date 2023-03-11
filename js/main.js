/*--- CHANGE BACKGROUND HEADER ---*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll__header")
    : header.classList.remove("scroll__header");
};
window.addEventListener("scroll", scrollHeader);

/*--- SHOW SCROLL UP ---*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll_up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show_scroll")
    : scrollUp.classList.remove("show_scroll");
};
window.addEventListener("scroll", scrollUp);

/*--- SCROLL REVEAL ANIMATION ---*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 200,
  reset: true,
});
sr.reveal(
  `.home .home__container .data  , .products .data , .steps .steps__container , .footer .data`
);
sr.reveal(`.home__img`, { origin: "bottom" });
sr.reveal(`.about img`, { origin: "right" });
sr.reveal(`.about .data`, { origin: "left" });
sr.reveal(`.testimonial__img`, { origin: "right" });
sr.reveal(`.testimonial .data`, { origin: "left" });
sr.reveal(`.products .card`, { interval: 100 });
