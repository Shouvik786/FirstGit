// Create an h3 element
const h3 = document.createElement("h3");
// Create text node for the h3 element
const h3Text = document.createTextNode("Buy high quality organic fruits online");
// Append text node to h3 element
h3.appendChild(h3Text);

// Get all div elements
const divs = document.getElementsByTagName('div');
// Get the first div which is the header
const headerDiv = divs[0];
// Append the h3 element to the header div
headerDiv.appendChild(h3);


// Style the h3 element with italic font style
h3.style.fontStyle = "italic";


// Get the second div which contains the list of fruits
const fruitDiv = divs[1];
// Create a paragraph element
const para = document.createElement("p");
// Create text node for the paragraph
const paraText = document.createTextNode("Total fruits: 4");
// Append text node to paragraph element
para.appendChild(paraText);

// Set id attribute for the paragraph element
para.setAttribute("id", "fruits-total");
// Insert the paragraph before the unordered list in the fruit div
fruitDiv.insertBefore(para, fruitDiv.firstChild);
