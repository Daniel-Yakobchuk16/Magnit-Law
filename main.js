$(document).ready(function() {
  // Стрелка в верх 
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
  // При клике на ссылку с якорем
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();

    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });

// Ваш код для анимации подчеркивания активного пункта меню
  var nav = $('nav');
  var line = $('<div />').addClass('line');

  line.appendTo(nav);

  var active = nav.find('.active');
  var pos = 0;
  var wid = 0;

  if (active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
      left: pos,
      width: wid
    });
  }

  nav.find('ul li a').click(function(e) {
    if (
      (this.href.indexOf('team.html') !== -1 && window.location.href.indexOf('/team.html') === -1) ||
      (this.href.indexOf('team_en.html') !== -1 && window.location.href.indexOf('/team_en.html') === -1) ||
      (this.href.indexOf('gallery.html') !== -1 && window.location.href.indexOf('/gallery.html') === -1) ||
      (this.href.indexOf('gallery_en.html') !== -1 && window.location.href.indexOf('/gallery_en.html') === -1)||
      (this.href.indexOf('index.html') !== -1 && window.location.href.indexOf('/index.html') === -1) ||
      ((this.href.indexOf('index_en.html') !== -1 && window.location.href.indexOf('/index_en.html') === -1))
    ) {
      return;
    }
    
    e.preventDefault();
    if (!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {

      nav.addClass('animate');

      var _this = $(this);

      nav.find('ul li').removeClass('active');

      var position = _this.parent().position();
      var width = _this.parent().width();

      if (position.left >= pos) {
        line.animate({
          width: ((position.left - pos) + width)
        }, 300, function() {
          line.animate({
            width: width,
            left: position.left
          }, 150, function() {
            nav.removeClass('animate');
          });
          _this.parent().addClass('active');
        });
      } else {
        line.animate({
          left: position.left,
          width: ((pos - position.left) + wid)
        }, 300, function() {
          line.animate({
            width: width
          }, 150, function() {
            nav.removeClass('animate');
          });
          _this.parent().addClass('active');
        });
      }

      pos = position.left;
      wid = width;
    }
  });
});


// offer
var buisnes = document.getElementById('offer_cards_buisnes');
var private = document.getElementById('offer_cards_private');

function toggleBlocks_buisnes() {
  var buisnesMore = document.getElementById('offer_cards_buisnes_more');
  var privateMore = document.getElementById('offer_cards_private_more');

  // Проверяем видимость блока offer_cards_private_more
  if (privateMore.style.visibility === 'visible') {
    $(privateMore).slideUp(500, function() {
      privateMore.style.visibility = 'hidden';
    });
  }

  // Инвертируем видимость блока offer_cards_buisnes_more
  if (buisnesMore.style.visibility === 'hidden' || buisnesMore.style.visibility === '') {
    $(buisnesMore).css('visibility', 'visible').hide().slideDown(500);
  } else {
    $(buisnesMore).slideUp(500, function() {
      buisnesMore.style.visibility = 'hidden';
    });
  }
}

function toggleBlocks_private() {
  var buisnesMore = document.getElementById('offer_cards_buisnes_more');
  var privateMore = document.getElementById('offer_cards_private_more');

  // Проверяем видимость блока offer_cards_buisnes_more
  if (buisnesMore.style.visibility === 'visible') {
    $(buisnesMore).slideUp(500, function() {
      buisnesMore.style.visibility = 'hidden';
    });
  }

  // Инвертируем видимость блока offer_cards_private_more
  if (privateMore.style.visibility === 'hidden' || privateMore.style.visibility === '') {
    $(privateMore).css('visibility', 'visible').hide().slideDown(500);
  } else {
    $(privateMore).slideUp(500, function() {
      privateMore.style.visibility = 'hidden';
    });
  }
}

// Отменяем всплытие события click на внутренних элементах
$("#offer_cards_buisnes_more, #offer_cards_private_more").on("click", function(event) {
  event.stopPropagation();
});


// slider

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");

let current = 0;
const totalSlides = slides.length;

const gotoPrev = () => {
  current = (current - 1 + totalSlides) % totalSlides;
  updateSlides();
};

const gotoNext = () => {
  current = (current + 1) % totalSlides;
  updateSlides();
};

slider.addEventListener("click", () => {
  gotoNext();
});

const updateSlides = () => {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  const prev = (current - 1 + totalSlides) % totalSlides;
  const next = (current + 1) % totalSlides;

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};



