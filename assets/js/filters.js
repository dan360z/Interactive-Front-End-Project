$(document).ready(function() {

   $('.search-container').hide();
   $('.menu').hide();
   $('#tapMap').hide();
   //--------------------------------------------------------------
   $('#search-btn').click(function() {
      $('.menu').slideUp();
      $('.search-container').slideToggle();
   });

   $('#places-btn').click(function() {
      $('.search-container').slideUp();
      $('.menu').slideToggle();
   });
   //-------------------------------------------------------------------
   
   $('.place-type').children().click(function() {
      $('#tapMap').show();
      setTimeout(function() {
         $('#tapMap').hide();
      }, 2500);
   });
   
     //-------------------------------------------------------------------
   
   $('.place-type').children().click(function() {
      setTimeout(function() {
         $('.menu').slideToggle();
      }, 150);
   });

   //----------------------------------------------------------
   
   $('#accomodation').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#atm').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#store').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#bar').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#restaurant').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#night-club').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#casino').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#bowling').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#shopping').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#park').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#amusement-park').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#museum').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#aquarium').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#zoo').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#train-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#taxi-stand').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#transit-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });
   $('#subway-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
   });

});
