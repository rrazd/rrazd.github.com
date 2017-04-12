(function () {
  function drawTagLines() {
    $('.canvas-text').each(function (index, canvas) {
      var context=canvas.getContext("2d"),
        boudingRect = canvas.getBoundingClientRect(),
        width = boudingRect.width,
        height = boudingRect.height;

      context.globalCompositeOperation = 'xor';
      context.font="60px Proxima_nova_bold";
      context.fillStyle = "white";
      context.fillRect(0, 0, width * 2, height * 2);
      context.fillStyle = "black";
      context.textAlign = "center";
      context.textBaseline="middle";
      context.fillText(canvas.getAttribute('data-text'), width, height);
    });
  }

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
        $(".case-header").addClass("shade");
      } else {
        $(".case-header").removeClass("shade");
      }
  });

  $(document).ready(function() {
    $('img.lazy').lazyload({
        threshold : 200,
        effect: "fadeIn",
        placeholder: ""
    });
  });

  window.addEventListener('load', function () {
    $('.loader').addClass("transparent");
    setTimeout(function () {
      $('.loader').addClass('hidden');
    }, 500);
    drawTagLines();
  });
})();
