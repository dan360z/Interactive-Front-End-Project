$(document).ready(function() {
   
   $('#bars').click(function() {
       $(this).addClass('selected');
       $('#restaurants').removeClass('selected');
   });
   $('#restaurants').click(function() {
       $(this).addClass('selected');
       $('#bars').removeClass('selected');
   });
    
});