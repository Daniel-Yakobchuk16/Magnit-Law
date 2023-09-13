$(document).ready(function() {
  // Отображение стрелки при прокрутке вниз
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#topButton').addClass('show');
    } else {
      $('#topButton').removeClass('show');
    }
  });

  // Плавная прокрутка вверх при клике на стрелку
  $('#topButton').click(function() {
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});
// FAQ
$(document).ready(function() {
    $(".faq-question").on("click", function(){
      if( $(this).parent().hasClass("active") ){
        $(this).next().slideUp();
        $(this).parent().removeClass("active");
      }
      else{
        $(".faq-answer").slideUp();
        $(".faq-singular").removeClass("active");
        $(this).parent().addClass("active");
        $(this).next().slideDown();
      }
    });
});

// Увеличение текста

function toggleOverlay_2() {
  var overlay_2 = document.querySelector('.overlay_2');
  
  if (overlay_2.classList.contains('active')) {
    overlay_2.classList.remove('active');
  } else {
    overlay_2.classList.add('active');
  }
}

function closeOverlay_2() {
  var overlay_2 = document.querySelector('.overlay_2');
  overlay_2.classList.remove('active');
}
//
function toggleOverlay() {
  var overlay = document.querySelector('.overlay');
  
  if (overlay.classList.contains('active')) {
    overlay.classList.remove('active');
  } else {
    overlay.classList.add('active');
  }
}

function closeOverlay() {
  var overlay = document.querySelector('.overlay');
  overlay.classList.remove('active');
}

