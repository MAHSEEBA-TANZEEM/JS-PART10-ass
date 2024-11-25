window.addEventListener("scroll", () => { 
    const header = document.getElementById("header"); 
    if (window.scrollY > 50) { 
        header.classList.add("scrolled"); 
    } else { 
        header.classList.remove("scrolled"); 
    } 
}); 

// lastKnownScrollPosition = 0:
// This is a variable to keep track of the last scroll position on the page.

// ticking = false:
// This is a flag used to prevent multiple updates happening at once during scrolling (to improve performance).

// doSomething(scrollPos):
// This function is a placeholder where you can perform actions (like changing colors) based on the scroll position.

// First, Scroll event listener 
// document.addEventListener("scroll", (event) => {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });
 
// Every time the user scrolls, it updates lastKnownScrollPosition to the current scroll position (window.scrollY).

// Second 
// window.addEventListener("scroll", () => { 
//     const header = document.getElementById("header"); 
//     if (window.scrollY > 50) { 
//         header.classList.add("scrolled"); 
//     } else { 
//         header.classList.remove("scrolled"); 
//     } 
// });
// If the scroll position is greater than 50 pixels, it adds the class "scrolled" to the header element (which should trigger a style change, like a color change).
// If the scroll position is less than 50 pixels, it removes the "scrolled" class. 
