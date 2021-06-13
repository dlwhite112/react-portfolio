window.addEventListener("scroll", function (e) {
    const target = document.querySelectorAll(".scroll");

    var i = 0,
      length = target.length;
    for (i; i < length; i++) {
      var pos = window.pageYOffset * target[i].dataset.rate;

      if (target[i].dataset.direction === "vertical") {
        target[i].style.transform = `translate3d(0px,${pos}px, 0px)`;
      } else {
        var posX = window.pageYOffset * target[i].dataset.ratex;
        var posY = window.pageYOffset * target[i].dataset.ratey;
        target[i].style.transform = `translate3d(${posX}px,${posY}px, 0px)`;
      }
    }
  });