const items = document.querySelectorAll("#timeline li");

const isInViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
const run = () =>
  items.forEach((item) => {
    if (isInViewPort(item)) {
      item.classList.add("show");
    }
    // else {
    //   item.classList.remove("show");
    // }
  });

// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
