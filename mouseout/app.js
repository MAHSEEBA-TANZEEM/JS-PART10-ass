const items = document.getElementById("items");

// Briefly make the list purple when the mouse moves off the
// <ul> element
items.addEventListener(
  "mouseleave",
  (event) => {
    // highlight the mouseleave target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 1000);
  },
  false,
);

// Briefly make an <li> orange when the mouse moves off of it
items.addEventListener(
  "mouseout",
  (event) => {
    // highlight the mouseout target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);

