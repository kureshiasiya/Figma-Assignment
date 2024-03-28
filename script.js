// JavaScript to add click event listener to each link
const links = document.querySelectorAll(".navigation li a");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    links.forEach((link) => link.classList.remove("green")); // Remove green class from all links
    this.classList.add("green"); // Add green class to clicked link
  });
});
function changeColor(button) {
  // Remove the 'active' class from all buttons
  var buttons = document.querySelectorAll(".explore-button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Add the 'active' class to the clicked button
  button.classList.add("active");
}
