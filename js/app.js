/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const sectionElements = Array.from(document.querySelectorAll('section'));
const navUnorderedList = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */


// build the nav

function createListItems() {
    for (section of sectionElements) {
        listItem = document.createElement('li');
        listItem.innerHTML = `<li><a href = "#${section.id}" data-nav = "${section.id}" class = "menu__link">${section.dataset.nav}</li>`;
        navUnorderedList.appendChild(listItem);
    }
}

createListItems();


// Add class 'active' to section when near top of viewport


/*Now we are implementing the sections active states by using the .getBoundingClientRect() built-in function, to change the style for each section
while being viewed. Thus the section that is being viewed is the one that will have an active state while the others are passive*/

window.onscroll = function() {
    document.querySelectorAll("section").forEach(function(active) {
        if (active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150) {
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    });
};


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click


navUnorderedList.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.dataset.nav) {
        document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            location.hash = `${event.target.dataset.nav}`;
        }, 180);
    }
});


// Set sections as active