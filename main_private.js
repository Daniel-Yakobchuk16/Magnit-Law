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
$(document).ready(function () {
  $(".faq-question").on("click", function () {
      var $faqSingular = $(this).closest('.faq-singular');

      if ($(this).parent().hasClass("active")) {
          $(this).next().slideUp();
          $(this).parent().removeClass("active");
          $('#offer').removeClass('expanded expanded_2 expanded_3 expanded_4');
          $('#offer_2').removeClass('expanded expanded_2 expanded_3 expanded_4');
      } else {
          $(".faq-answer").slideUp();
          $(".faq-singular").removeClass("active");
          $(this).parent().addClass("active");
          $(this).next().slideDown();
          $('#offer').removeClass('expanded expanded_2 expanded_3 expanded_4');
          $('#offer_2').removeClass('expanded expanded_2 expanded_3 expanded_4');

          if ($faqSingular.is('#special_faq')) {
              $('#offer').toggleClass('expanded');
          } else if ($faqSingular.is('#special_faq_2')) {
              $('#offer').toggleClass('expanded_2');
          } else if ($faqSingular.is('#special_faq_3')) {
              $('#offer').toggleClass('expanded_3');
          } else if ($faqSingular.is('#special_faq_4')) {
              $('#offer').toggleClass('expanded_4');
          }

          if ($faqSingular.is('#special_faq')) {
              $('#offer_2').toggleClass('expanded');
          } else if ($faqSingular.is('#special_faq_2')) {
              $('#offer_2').toggleClass('expanded_2');
          } else if ($faqSingular.is('#special_faq_3')) {
              $('#offer_2').toggleClass('expanded_3');
          } else if ($faqSingular.is('#special_faq_4')) {
              $('#offer_2').toggleClass('expanded_4');
          }
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

