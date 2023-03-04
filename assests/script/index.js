



const mediaRun = new IntersectionObserver((views) => {
  views.forEach((view) => {
    if (view.isIntersecting) {
      view.target.classList.add("show");
    } else {
      view.target.classList.remove("show");
    }
  });
});

const mediaElements1 = document.querySelectorAll(".page3-box");
mediaElements1.forEach((e) => mediaRun.observe(e));

const mediaElements2 = document.querySelectorAll(".page3-box-1");
mediaElements2.forEach((e) => mediaRun.observe(e));
