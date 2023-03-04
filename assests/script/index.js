



const mediaRun = new IntersectionObserver((views) => {
  views.forEach((view) => {
    if (view.isIntersecting) {
      view.target.classList.add("show");
    } else {
      view.target.classList.remove("show");
    }
  });
});

const mediaElements = document.querySelectorAll(".page3-box");
mediaElements.forEach((e) => mediaRun.observe(e));
