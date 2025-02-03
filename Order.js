function get(param) {
  const urlParams = new URLSearchParams(window.location.search); // window should be lowercase
  return urlParams.get(param); // return on the same line
}

const contentId = get("content"); // Get the 'content' parameter from the URL

if (contentId) {
  const contentElement = document.getElementById(contentId); // Use the correct variable name
  if (contentElement) {
    // Ensure the element exists
    contentElement.classList.remove("box"); // Remove the 'hidden' class to show the content
  }
}

/**Green Page */

 // Get all buttons
    const buttons = document.querySelectorAll('.button');

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Get the green page in the same section as the clicked button
        const greenPage = button.nextElementSibling;

        // Slide in the green page
        greenPage.classList.add("show");

        // Slide out the green page after 2 seconds
        setTimeout(() => {
          greenPage.classList.remove("show");
        }, 2000);
      });
    });