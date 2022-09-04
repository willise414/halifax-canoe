//select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
navItems.forEach((item) => {
  item.addEventListener("click", changePage);

  // console.log(item.className);
});

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    //Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItems.forEach((item) => item.classList.remove("show"));

    //Set menu state
    showMenu = false;
  }
}

function changePage() {
  menuBtn.classList.remove("close");
  menu.classList.remove("show");
  menuNav.classList.remove("show");
  menuBranding.classList.remove("show");

  navItems.forEach((item) => item.classList.remove("show"));
  // let x = navItems[2].id;
  // console.log(x);

  //Set menu state
  showMenu = false;
  // console.log(x);
  //window.location.href = `${x}.html`;
}

// Form Handler
let fullName = document.getElementById("name").value;

let formSubmit = document.getElementById("booking-btn");

let myValue = document.getElementById("adventure");
myValue.addEventListener("change", selectedAdventure);

function selectedAdventure() {
  let dates = document.getElementById("dates");
  let price = document.getElementById("price");
  let fullName = document.getElementById("name");
  const selected = document.getElementById("adventure").value;

  if (selected === "Halifax") {
    price.value = 249;

    dates.value = "July 14-16, 2023";
  } else if (selected === "Sydney") {
    price.value = 399;
    dates.value = "June 12-14, 2023";
  } else if (selected === "Cape Breton") {
    price.value = 459;
    dates.value = "June 7-10, 2023";
  }
  //   return price;

  //   let response = `<h1> Thank you for your booking ${fullName}</h1>
  //   <h3>We look forward to seeing you in ${selected} on ${dates}</h3>
  //   <h3>The price for this adventure is ${total}.
  //   <h3>We will send a confirmation and further details to ${email} `;
  //   document.querySelector(".confirm").innerHTML = response;
}

formSubmit.addEventListener("click", () => {
  document.querySelector(".bookingForm").classList.add("hideMessage");
  document.querySelector(".confirm").classList.remove("hideMessage");
  document.querySelector(".container").classList.add("hideMessage");
  document.querySelector(".confirm").classList.add("showMessage");
  let fullName = document.getElementById("name");
  let selected = document.getElementById("adventure");
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let response = `<h1> Thank you for your booking ${fullName.value}!</h1>
   <h3>We look forward to seeing you in ${selected.value} on ${dates.value}</h3>
  <h3>The price for this adventure is $${price.value}.
   <h3>We will send a confirmation and further details to ${email}. `;
  document.querySelector(".confirm").innerHTML = response;
});
