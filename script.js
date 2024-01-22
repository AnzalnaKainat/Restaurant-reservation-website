//////////////////////// Navigation Links///////////////////////////////
function goToSignUp() {
  window.location.href = "signup.html";
}

function goTologin() {
  window.location.href = "login.html";
}

function goToHomepage() {
  window.location.href = "homepage.html";
}

function goToConfirmedReservation() {
  window.location.href = "confirmed-reservation.html";
}

function navigateBackToReservation() {
  window.location.href = "reservation.html";
}

function goBackToHomepage() {
  window.location.href = "homepage.html";
}

//////////////////Navigation---JavaScript to toggle the mobile menu///////////////////////////
function showMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.add("active");
}

function hideMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("active");
}

////////////////////Search Toggle///////////////////////////
function toggleSearch() {
  const searchLabel = document.getElementById("search");
  if (
    searchLabel.style.display === "none" ||
    searchLabel.style.display === ""
  ) {
    searchLabel.style.display = "block";
  } else {
    searchLabel.style.display = "none";
  }
}


function toggleColor(heartIcon) {
  // Toggle the 'active' class to change the color
  heartIcon.classList.toggle('active');
}





