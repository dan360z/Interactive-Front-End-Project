$(document).ready(function() {

   //Hides dropdown menus and popups---------------------------------

   $('.search-container').hide();
   $('.menu').hide();
   $('#selectType').hide();
   $('#tapMap').hide();
   $('#results').hide();
   $('#noResults').hide();

   //Hides one dropdown menu when another shows---------------------------------------------

   $('#search-btn').click(function() {
      $('.menu').slideUp();
      $('.search-container').slideToggle();
   });

   $('#places-btn').click(function() {
      $('.search-container').slideUp();
      $('.menu').slideToggle();
   });

   //Hides the Places dropdown menu when user selects a place type--------------------------------------

   $('.place-type').children().click(function() {
      setTimeout(function() {
         $('.menu').slideToggle();
      }, 150);
   });

   //Toggles the selected class for each place type------------------------------------------

   $('#accomodation').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('accomodations');
   });
   $('#atm').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('Atms');
   });
   $('#store').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('stores');
   });
   $('#bar').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('bars');
   });
   $('#restaurant').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('restaurants');
   });
   $('#night-club').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('night clubs');
   });
   $('#casino').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('casinos');
   });
   $('#bowling').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('bowling alleys');
   });
   $('#shopping').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('shopping malls');
   });
   $('#park').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('parks');
   });
   $('#amusement-park').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('amusement parks');
   });
   $('#museum').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('museums');
   });
   $('#aquarium').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('aquariums');
   });
   $('#zoo').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('zoos');
   });
   $('#train-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('train stations');
   });
   $('#taxi-stand').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('taxi stands');
   });
   $('#transit-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('transit stations');
   });
   $('#subway-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place, #placeCount').text('subway stations');
   });
});
