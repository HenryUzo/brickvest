var owl = $('#owl-carousel-1');
      owl.owlCarousel({
        autoplay: true,
        lazyLoad: true,
        rewind: true,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        margin: 30,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1300: {
            items: 4
          },
         
          1900:{
            items:6
        }
        }
      })


      // open mobile menu
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});


(function(){
  var burger = document.querySelector('.burger-container'),
      header = document.querySelector('.header');
  
  burger.onclick = function() {
      header.classList.toggle('menu-opened');
  }
}());