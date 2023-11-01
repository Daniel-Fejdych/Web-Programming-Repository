$(function() {
document.body.style.height = '200pt';



var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js';
script.id = 'cookiebanner';
script['data-height']   = '20px'; // non-standard attribute (may need to use 'setAttribute(..)'
script['data-position'] = 'top';
script['data-message']  = 'We use cookies! We need your consent!';
script['color'] = '#000';
document.head.appendChild(script);
/*

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.6.0/mermaid.min.js';
script.id = 'mermaid';
script['data-height']   = '20px'; // non-standard attribute (may need to use 'setAttribute(..)'
script['data-position'] = 'top';
script['data-message']  = 'We use cookies! We need your consent!';
script['color'] = '#000';
document.head.appendChild(script);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.freedraw/2.0.1/leaflet-freedraw.web.js';
script.id = 'leaflet-freedraw';
script['data-height']   = '20px'; // non-standard attribute (may need to use 'setAttribute(..)'
script['data-position'] = 'top';
script['data-message']  = 'We use cookies! We need your consent!';
script['color'] = '#000';
document.head.appendChild(script);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js';
script.id = 'react';
script['data-height']   = '20px'; // non-standard attribute (may need to use 'setAttribute(..)'
script['data-position'] = 'top';
script['data-message']  = 'We use cookies! We need your consent!';
script['color'] = '#000';
document.head.appendChild(script);






*/
script.onload = function()
{
  console.log('loaded script');

  // console.log( initCookieConsent );
}
console.log('ready');
});