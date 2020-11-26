(function($) {

  // $(document).ready(function() {
  
  'use strict';
  
  // find the desired selectors
  let $btn = $('#request');
  let $bio = $('#bio');

  // register an event
  $btn.on('click', function() {
    // hide the button
    $(this).hide();
    // send the request and get the response
    $bio.load('./pages/bio.html p:first-child', completeFunction);
  });
  
  
  // complete function
  function completeFunction(responseText, textStatus, request) {
    // add a border
    $bio.css('border', '1px solid #e8e8e8');
    // uncomment the line below to see the request
    // console.log(request);
    // check if there are any errors
    if(textStatus == 'error') {
      // show a relevant message
      $bio.text('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
    } 
  }
  
// });
  
})(jQuery);