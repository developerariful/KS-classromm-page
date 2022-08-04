// $(document).ready(function () {
//     // Nav toggeler
//     let nav = $("#nav");
//     let main = $("#main");
//     let toggler = $(".toggler");
  
//     $(toggler).click(function (e) {
//       e.preventDefault();
//       $(main).toggleClass("active");
//       if ($(this).hasClass("icofont-navigation-menu")) {
//         $(this).toggleClass("icofont-navigation-menu");
//         $(this).toggleClass("icofont-close");
//       } else {
//         $(this).toggleClass("icofont-close");
//         $(this).toggleClass("icofont-navigation-menu");
//       }
//     });
  
//     // Vido section expand collapse
//     $(".expand-collapse h3").each(function () {
//       var tis = $(this),
//         state = false,
//         answer = tis.next("div").slideUp();
//       tis.click(function () {
//         state = !state;
//         answer.slideToggle(state);
//         tis.toggleClass("active", state);
//       });
//     });
//   });
$(document).ready(function () {
    // Nav toggeler
    let nav = $("#nav");
    let main = $("#main");
    let toggler = $(".toggler");
  
    $(toggler).click(function (e) {
      e.preventDefault();
      $(main).toggleClass("active");
      if ($(this).hasClass("fa-solid fa-bars")) {
        $(this).toggleClass("fa-solid fa-bars");
        $(this).toggleClass("fa-solid fa-xmark");
      } else {
        $(this).toggleClass("fa-solid fa-xmark");
        $(this).toggleClass("fa-solid fa-bars");
      }
    });
  
    // Vido section expand collapse
    $(".expand-collapse h3").each(function () {
      var tis = $(this),
        state = false,
        answer = tis.next("div").slideUp();
      tis.click(function () {
        state = !state;
        answer.slideToggle(state);
        tis.toggleClass("active", state);
      });
    });
  });


let sign_up_btn = document.querySelector("#sign-up-btn");
let sign_in_btn = document.querySelector("#sign-in-btn");
let container = document.querySelector("#container");

if (sign_up_btn) {
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
}
if (sign_in_btn) {
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
}