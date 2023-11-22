function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {


let prom = await fetch( 'https://moxie.foxnews.com/google-publisher/latest.xml' );
let text = await prom.text();

console.log( text.substring(0, 100 ) );

let parser = new DOMParser();
let xmlDoc = parser.parseFromString(text, "text/xml");

console.log( xmlDoc );

const items = xmlDoc.querySelectorAll("item");
console.log('items:', items );

items.forEach( (el)=>{
    let title       = el.querySelector('title').textContent;
    let description = el.querySelector('description').textContent;
    let guid        = el.querySelector('guid').textContent;

    console.log('title:',       title       );
    console.log('description:', description);
    console.log('guid:',        guid);

    let div = document.createElement('div');
    document.body.appendChild( div );
    div.innerHTML = `
		<h3> From: New York Times</h3>
        <h2>${title}</h2>
        <p>${description}</p>
    `;
    if ( guid ) div.innerHTML += `<a href='${guid}'>LINK</a>`;
});

let prom1 = await fetch( 'https://moxie.foxnews.com/google-publisher/latest.xml' );
text = await prom1.text();

console.log( text.substring(0, 100 ) );

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

console.log( xmlDoc );

const items1 = xmlDoc.querySelectorAll("item");
console.log('items:', items );

items1.forEach( (el)=>{
    let title       = el.querySelector('title').textContent;
    let description = el.querySelector('description').textContent;
    let guid        = el.querySelector('guid').textContent;

    console.log('title:',       title       );
    console.log('description:', description);
    console.log('guid:',        guid);

    let div = document.createElement('div');
    document.body.appendChild( div );
    div.innerHTML = `
		<h3> From: Fox News </h3>
        <h2>${title}</h2>
        <p>${description}</p>
    `;
    if ( guid ) div.innerHTML += `<a href='${guid}'>LINK</a>`;



});

let prom2 = await fetch( 'https://www.politico.com/rss/politicopicks.xml' );
text = await prom2.text();

console.log( text.substring(0, 100 ) );

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

console.log( xmlDoc );

const items2 = xmlDoc.querySelectorAll("item");
console.log('items:', items );

items2.forEach( (el)=>{
    let title       = el.querySelector('title').textContent;
    let description = el.querySelector('description').textContent;
    let guid        = el.querySelector('guid').textContent;

    console.log('title:',       title       );
    console.log('description:', description);
    console.log('guid:',        guid);

    let div = document.createElement('div');
    document.body.appendChild( div );
    div.innerHTML = `
		<h3> From: Politico </h3>
        <h2>${title}</h2>
        <p>${description}</p>
    `;
    if ( guid ) div.innerHTML += `<a href='${guid}'>LINK</a>`;


});

}
$(function() {

asyncCall();
})
