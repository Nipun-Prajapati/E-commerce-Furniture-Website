
/**Banner Swiper */
let swiper = new Swiper('.banner', {
  autoplay: {
    delay: 4000,
  },
})

/** Search Box */

let btn = document.querySelector(".search-logo")

let box = document.querySelector("#search-box")

btn.addEventListener("click",function() {
   if( box.style.visibility === "visible")
   {
    box.style.visibility = "hidden";
   }
   else 
   {
    box.style.visibility = "visible";
   }
})

/**Sign up Page */

let sign = document.querySelector(".signup")

sign.addEventListener("click",function() {
  window.location.href = "Signup.html";
})

/** Review */

    const review = new Swiper(".myReview", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


/**Call a Function for Order */

function fun(contentId) {
  window.location.href = `Order.html?content=${contentId}`;
}