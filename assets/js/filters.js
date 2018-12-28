$(document).ready(function() {

   $('.search-container').hide();

   $('#search-btn').click(function() {
      $('.menu').slideUp();
      $('.search-container').slideToggle();
   });

   $('.menu').hide();

   $('#places-btn').click(function() {
      $('.search-container').slideUp();
      $('.menu').slideToggle();
   });

   $('#accomodation').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#atm').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#store').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#bar').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#restaurant').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#night-club').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#casino').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#bowling').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#shopping').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#park').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#amusement-park').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#museum').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#aquarium').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#zoo').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#train-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#taxi-stand').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#transit-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });
   $('#subway-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      setTimeout(function() {
         $('.menu').slideToggle()
      }, 200);
   });

});
