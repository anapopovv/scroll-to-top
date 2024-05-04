var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

const bodyEl = document.body;
const barEl = document.querySelector('.bar');
const updateBar = () => {
  let scrollPos = (window.scrollY /
    (bodyEl.scrollHeight - window.innerHeight)) * 100;
  barEl.style.width = `${scrollPos}%`;
  requestAnimationFrame(updateBar);
};
updateBar();