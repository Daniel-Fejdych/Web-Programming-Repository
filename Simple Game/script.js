$(document).ready(function(){
  // create button
      var options = ['Click This', 'Not this', 'Maybe this one.'];
      options.forEach(function(option){
      var button = $('<button>').text(option);
      button.appendTo('#btn');
})
