var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


$(".toTop").click(function() {
    var toTop = $("header").offset().top;    
    $('html, body').animate({
      scrollTop: toTop},900);
});

$(".toAbout").click(function() {
    var toAbout = $(".about").offset().top;    
    $('html, body').animate({
      scrollTop: toAbout},900);
});

$(".toTeachers").click(function() {
    var toTeachers = $(".teachers").offset().top;    
    $('html, body').animate({
      scrollTop: toTeachers},900);
});

$(".toContacts").click(function() {
    var toContacts = $(".contacts").offset().top;    
    $('html, body').animate({
      scrollTop: toContacts},900);
});



$(".mobile-nav").click(function() {
  $(".burger-menu").toggleClass('active');
  $(".hidden-menu").slideToggle(300);
});
