// TEMPLE DATA ARRAY
const temples = [
{
templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},

{
templeName: "Manti Utah",
location: "Manti, Utah, United States",
dedicated: "1888, May, 21",
area: 74792,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},

{
templeName: "Payson Utah",
location: "Payson, Utah, United States",
dedicated: "2015, June, 7",
area: 96630,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},

{
templeName: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020, May, 2",
area: 6861,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},

{
templeName: "Washington D.C.",
location: "Kensington, Maryland, United States",
dedicated: "1974, November, 19",
area: 156558,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},

{
templeName: "Lima Perú",
location: "Lima, Perú",
dedicated: "1986, January, 10",
area: 9600,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},

{
templeName: "Mexico City Mexico",
location: "Mexico City, Mexico",
dedicated: "1983, December, 2",
area: 116642,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},

{
templeName: "Rome Italy",
location: "Rome, Italy",
dedicated: "2019, March, 10",
area: 41010,
imageUrl: "./images/rome.webp"
},

{
templeName: "Accra Ghana",
location: "Accra, Ghana",
dedicated: "2004, January, 11",
area: 17500,
imageUrl: "./images/accra.webp"
},

{
templeName: "Lagos Nigeria",
location: "Lagos, Nigeria",
dedicated: "2025, May, 18",
area: 19000,
imageUrl: "./images/lagos.webp"
}
];

// DEBUG TEST
console.log("JavaScript Loaded Successfully");

// ELEMENT SELECTORS
const menuButton = document.querySelector("#menu-button");

const navigation = document.querySelector(".navigation");

const gallery = document.querySelector(".gallery");

const pageTitle = document.querySelector("#page-title");

// HAMBURGER MENU
if (menuButton && navigation) {

menuButton.addEventListener("click", () => {


navigation.classList.toggle("open");

menuButton.textContent =
  navigation.classList.contains("open") ? "✖" : "☰";


});

}

// DISPLAY TEMPLES FUNCTION
const displayTemples = (templesList) => {

// STOP IF GALLERY DOES NOT EXIST
if (!gallery) return;

// CLEAR GALLERY
gallery.innerHTML = "";

// LOOP THROUGH TEMPLES
templesList.forEach((temple) => {


// CREATE CARD
const card = document.createElement("section");

// CREATE ELEMENTS
const name = document.createElement("h3");

const location = document.createElement("p");

const dedicated = document.createElement("p");

const area = document.createElement("p");

const image = document.createElement("img");

// ADD CONTENT
name.textContent = temple.templeName;

location.innerHTML =
  `<strong>Location:</strong> ${temple.location}`;

dedicated.innerHTML =
  `<strong>Dedicated:</strong> ${temple.dedicated}`;

area.innerHTML =
  `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

// IMAGE SETTINGS
image.src = temple.imageUrl;

image.alt = temple.templeName;

image.loading = "lazy";

image.width = 400;

image.height = 250;

// FALLBACK IMAGE
image.onerror = () => {

  image.src =
    "https://via.placeholder.com/400x250?text=Temple+Image";

};

// APPEND TO CARD
card.appendChild(name);

card.appendChild(location);

card.appendChild(dedicated);

card.appendChild(area);

card.appendChild(image);

// APPEND CARD TO GALLERY
gallery.appendChild(card);


});

};

// DISPLAY ALL TEMPLES
displayTemples(temples);

// FILTER FUNCTION
const filterTemples = (title, filteredTemples) => {

if (pageTitle) {


pageTitle.textContent = title;


}

displayTemples(filteredTemples);

};

// NAVIGATION LINKS
const homeLink = document.querySelector("#home");

const oldLink = document.querySelector("#old");

const newLink = document.querySelector("#new");

const largeLink = document.querySelector("#large");

const smallLink = document.querySelector("#small");

// HOME FILTER
if (homeLink) {

homeLink.addEventListener("click", (event) => {


event.preventDefault();

filterTemples("Home", temples);


});

}

// OLD FILTER
if (oldLink) {

oldLink.addEventListener("click", (event) => {


event.preventDefault();

const oldTemples = temples.filter((temple) => {

  return new Date(temple.dedicated).getFullYear() < 1900;

});

filterTemples("Old Temples", oldTemples);


});

}

// NEW FILTER
if (newLink) {

newLink.addEventListener("click", (event) => {


event.preventDefault();

const newTemples = temples.filter((temple) => {

  return new Date(temple.dedicated).getFullYear() > 2000;

});

filterTemples("New Temples", newTemples);


});

}

// LARGE FILTER
if (largeLink) {

largeLink.addEventListener("click", (event) => {


event.preventDefault();

const largeTemples = temples.filter((temple) => {

  return temple.area > 90000;

});

filterTemples("Large Temples", largeTemples);


});

}

// SMALL FILTER
if (smallLink) {

smallLink.addEventListener("click", (event) => {


event.preventDefault();

const smallTemples = temples.filter((temple) => {

  return temple.area < 10000;

});

filterTemples("Small Temples", smallTemples);


});

}

// FOOTER YEAR
const currentYear = document.querySelector("#currentyear");

if (currentYear) {

currentYear.textContent = new Date().getFullYear();

}

// LAST MODIFIED
const lastModified = document.querySelector("#lastModified");

if (lastModified) {

lastModified.textContent =
`Last Modified: ${document.lastModified}`;

}
