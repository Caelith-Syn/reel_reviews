console.log("Connected in the console!😃");

// =============================================================================

// //This was my first attempt at mapipulting the DOM by clicking on an element in the HTML file and then showing an alert message based on the ID of the element clicked.

// // This part of the code creates an event listener which listens for a click event on the entire document.
// document.addEventListener("click", function (event) {
//   // The id variable is declared and then matches it with the id of the element clicked through the event.target.id property.
//   const id = event.target.id;

//   // This is a bsic if-else statement which checks the id of the clicked element and shows an alert message based on the id.
//   if (id === "star1") {
//     alert("You clicked the first star!");
//   } else if (id === "star2") {
//     alert("You clicked the second star!");
//   } else if (id === "star3") {
//     alert("You clicked the third star!");
//   } else if (id === "star4") {
//     alert("You clicked the fourth star!");
//   } else if (id === "star5") {
//     alert("You clicked the fifth star!");
//   }
// });

// // I deceided to further develop this becusae I wanted to show a message in the console instead of an alert box so the user experience would be better.

// =============================================================================

// // This was my second attempt at the star rating system which outputs a message in the console when a star is clicked.
// // This code uses the same event listeners as the first attempt but instead of showing an alert, it logs a message to the console.

// // This part of the code adds event listeners to each star element + the result element.
// document.addEventListener("DOMContentLoaded", function () {
//   const star1 = document.getElementById("star1");
//   const star2 = document.getElementById("star2");
//   const star3 = document.getElementById("star3");
//   const star4 = document.getElementById("star4");
//   const star5 = document.getElementById("star5");
//   const result = document.getElementById("rating_result");

//   // This code adds event listeners to each star element.
//   // When a star is clicked, the corresponding star is filled and the others are emptied.
//   star1.addEventListener("click", function () {
//     star1.textContent = "★";
//     star2.textContent = "☆";
//     star3.textContent = "☆";
//     star4.textContent = "☆";
//     star5.textContent = "☆";
//     result.textContent = "You rated Captain America 1 out of 5 stars.";
//   });

//   star2.addEventListener("click", function () {
//     star1.textContent = "★";
//     star2.textContent = "★";
//     star3.textContent = "☆";
//     star4.textContent = "☆";
//     star5.textContent = "☆";
//     result.textContent = "You rated Captain America 2 out of 5 stars.";
//   });

//   star3.addEventListener("click", function () {
//     star1.textContent = "★";
//     star2.textContent = "★";
//     star3.textContent = "★";
//     star4.textContent = "☆";
//     star5.textContent = "☆";
//     result.textContent = "You rated Captain America 3 out of 5 stars.";
//   });

//   star4.addEventListener("click", function () {
//     star1.textContent = "★";
//     star2.textContent = "★";
//     star3.textContent = "★";
//     star4.textContent = "★";
//     star5.textContent = "☆";
//     result.textContent = "You rated Captain America 4 out of 5 stars.";
//   });

//   star5.addEventListener("click", function () {
//     star1.textContent = "★";
//     star2.textContent = "★";
//     star3.textContent = "★";
//     star4.textContent = "★";
//     star5.textContent = "★";
//     result.textContent = "You rated Captain America 5 out of 5 stars.";
//   });
// });

// // This attempt was going in the right direction but I knew that devloping this fucntion on a large scale would be difficult and very time consuing.
// // I decided to look for a more efficient way to do this and I found that using a loop would be the best way to do this.

// =============================================================================

// This was my third attempt at the star rating system which outputs a message in the console when a star is clicked.
// This code uses the same event listeners as the first attempt but instead of showing an alert, it also logs a message to the DOM like in my second attempt.

// This part of the code adds event listeners to each star element.
// When a star is clicked, the corresponding star is filled and the others are emptied.
document.addEventListener("DOMContentLoaded", function () {
  const star1 = document.getElementById("star1");
  const star2 = document.getElementById("star2");
  const star3 = document.getElementById("star3");
  const star4 = document.getElementById("star4");
  const star5 = document.getElementById("star5");
  const result = document.getElementById("rating_result");

  // This function handles the rating logic and updates the stars and result message.
  // It takes a rating parameter and updates the stars and result message accordingly.
  function handleRating(rating) {
    // This part of the code uses an array to store the star elements.
    // It then loops through the array and updates the text content and class of each star based on the rating.
    const stars = [star1, star2, star3, star4, star5];

    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].textContent = "★";
        stars[i].classList.add("selected");
      } else {
        stars[i].textContent = "☆";
        stars[i].classList.remove("selected");
      }
    }

    // This part of the code updates the result message based on the rating above.
    // It uses a template literal to create the message and sets it as the text content of the result element.
    result.textContent = `You rated "Captain America" ${rating} out of 5 stars.`;
  }

  // This part of the code adds event listeners to each star element.
  // When a star is clicked, the handleRating function is called with the corresponding number.
  //This code then just passes the number of stars clicked to the function above.
  star1.addEventListener("click", function () {
    handleRating(1);
  });

  star2.addEventListener("click", function () {
    handleRating(2);
  });

  star3.addEventListener("click", function () {
    handleRating(3);
  });

  star4.addEventListener("click", function () {
    handleRating(4);
  });

  star5.addEventListener("click", function () {
    handleRating(5);
  });
});
