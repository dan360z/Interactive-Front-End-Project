$(document).ready(function() {

   //Hides dropdown menus and popups---------------------------------

   $('.search-container').hide();
   $('.menu').hide();
   $('#tapMap').hide();
   
   //Hides one dropdown menu when another shows---------------------------------------------
   
   $('#search-btn').click(function() {
      $('.menu').slideUp();
      $('.search-container').slideToggle();
   });

   $('#places-btn').click(function() {
      $('.search-container').slideUp();
      $('.menu').slideToggle();
   });
   
   //Instructs user to click or tap on the map when they have selected a place type-----------
   
   $('.place-type').children().click(function() {
      $('#tapMap').show();
      setTimeout(function() {
         $('#tapMap').hide();
      }, 2500);
   });
   
    //Hides dropdown menu when user selects a place type--------------------------------------
   
   $('.place-type').children().click(function() {
      setTimeout(function() {
         $('.menu').slideToggle();
      }, 150);
   });

   //Toggles the selected class for each place type------------------------------------------
   
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
