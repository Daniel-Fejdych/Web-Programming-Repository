$(document).ready(function(){
  // create button
      var options = ['Option 1', 'Option 2', 'Option 3'];
      options.forEach(function(option){
      var button = $('<button>').text(option);
      button.appendTo('#btn');
})
