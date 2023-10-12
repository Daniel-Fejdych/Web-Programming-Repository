$(document).ready(function(){
  // create button
      var options = ['Click This', 'Not this', 'Maybe this one.'];
      options.forEach(function(option){
      var button = $('<button>').text(option);
      button.cssText = "position: absolute; top: 100px; right: 10px; width: 100px; height: 80px;";
      button.appendTo('#btn');
})
})