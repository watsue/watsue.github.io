const initFullPage = () => {
  $("#fullPage").fullpage({
    navigator: true,
    autoScrolling: true,
    navigation: true,
    horizontalBar: true,
    navigationPosition: "left",
  });
};

$(document).ready(() => {
  initFullPage();
});

const obsever = new IntersectionObserver(
  (entries, obsever) => {
    // console.log(entries);
    const node = entries[0];
    if (node.isIntersecting) {
      var count = 200;
      var defaults = {
        origin: { y: 0.7 },
      };

      function fire(particleRatio, opts) {
        confetti(
          Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio),
          })
        );
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
  },
  {
    threshold: 0.7,
  }
);

const lastSlide = document.getElementById("slide5");
obsever.observe(lastSlide);
