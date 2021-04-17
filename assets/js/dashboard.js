var owl = $('#owl-carousel-1');
      owl.owlCarousel({
        autoplay: true,
        lazyLoad: true,
        rewind: true,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        margin: 100,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1300: {
            items: 4
          },
         
          1900:{
            items:6
        }
        }
      })