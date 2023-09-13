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