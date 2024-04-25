// Change by querySelector
const fruitShop = document.querySelector('#main-heading');
fruitShop.style.textAlign= 'center';


const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';
basketHeading.style.marginLeft ='30px'

//change by querySelectorAll
// Select all fruit items
const fruitItems = document.querySelectorAll('.fruit');

// Loop through each fruit item
for(let i=0; i<fruitItems.length; i++){
  fruitItems[i].style.borderRadius ='5px';
  fruitItems[i].style.padding ='5px';
  fruitItems[i].style.margin ='3px';
  // Check if the index is even
  if (i % 2 === 1) {
    // If even, change background color to brown and text color to white
    fruitItems[i].style.backgroundColor = 'brown';
    fruitItems[i].style.color = 'white';
  }
}
