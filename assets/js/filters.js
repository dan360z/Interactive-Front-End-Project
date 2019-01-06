$(document).ready(function() {

   //Hides dropdown menus and popups---------------------------------

   $('.search-container').hide();
   $('.menu').hide();
   $('#tapMap').hide();
   $('#selectType').hide();
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
      $('#place').text('accomodations');
   });
   $('#atm').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('Atms');
   });
   $('#store').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('stores');
   });
   $('#bar').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('bars');
   });
   $('#restaurant').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('restaurants');
   });
   $('#night-club').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('night clubs');
   });
   $('#casino').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('casinos');
   });
   $('#bowling').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('bowling alleys');
   });
   $('#shopping').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('shopping malls');
   });
   $('#park').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('parks');
   });
   $('#amusement-park').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('amusement parks');
   });
   $('#museum').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('museums');
   });
   $('#aquarium').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('aquariums');
   });
   $('#zoo').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('zoos');
   });
   $('#train-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('train stations');
   });
   $('#taxi-stand').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('taxi stands');
   });
   $('#transit-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('transit stations');
   });
   $('#subway-station').click(function() {
      $('button').removeClass('selected');
      $(this).addClass('selected');
      $('#place').text('subway stations');
   });
});
