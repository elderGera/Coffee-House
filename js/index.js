// Hamburger menu
function myFunction() {
  var ml = document.getElementById("myLinks");
  var hm = document.getElementById("hamburgerMenu");
  var mt = document.getElementById("mobileTablet");
  var hl = document.getElementById("headerLogo");
  var hh = document.getElementById("headerHeading");

  // Hamburger Menu is More
  if (ml.style.display === "block") {
    ml.style.display = "none";

    if (hh.innerHTML === "Coffee House") {
      hm.innerHTML = "<img src='./assets/images/hm/more.webp' alt='more'>";
    } else {
      hm.innerHTML =
        "<img src='../../assets/images/hm/more.webp' alt='more' width='25px'>";
    }

    mt.style.margin = "0 0 0 0";
    hl.style.display = "block";
    hh.style.display = "block";
  } else if (hm.style.display === "none") {
    // Without Hamburger Menu
    hl.style.display = "block";
    hh.style.display = "block";
  } else {
    // Hamburger Menu is Delete
    ml.style.display = "block";

    if (hh.innerHTML === "Coffee House") {
      hm.innerHTML = "<img src='./assets/images/hm/delete.webp' alt='delete'>";
    } else {
      hm.innerHTML =
        "<img src='../../assets/images/hm/delete.webp' alt='delete' width='25px'>";
    }

    mt.style.margin = "0 0 0 -50px";
    hl.style.display = "none";
    hh.style.display = "none";
  }
}

// Slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slides.length === 0) {
    return;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Menu
function hooverCup() {
  function idCup(i, j) {
    let cup = document.getElementById(`cup${[i]}`);
    let infoCup = document.getElementById(`infoCup${[j]}`);
    if (!cup) {
      return;
    }

    // Change text color on mouseover
    cup.addEventListener("mouseover", function handleMouseOver() {
      infoCup.style.backgroundColor = "#ed7d0c";
    });

    // Change text color back on mouseout
    cup.addEventListener("mouseout", function handleMouseOut() {
      infoCup.style.backgroundColor = "#fff";
      document.getElementsByClassName("arrow").display = "block";
    });
  }

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 16; j++) {
      if ((i === 1) & ((j === 1) | (j === 2))) {
        idCup(i, j);
      }
      if ((i === 2) & ((j === 3) | (j === 4))) {
        idCup(i, j);
      }
      if ((i === 3) & ((j === 5) | (j === 6))) {
        idCup(i, j);
      }
      if ((i === 4) & ((j === 7) | (j === 8))) {
        idCup(i, j);
      }
      if ((i === 5) & ((j === 9) | (j === 10))) {
        idCup(i, j);
      }
      if ((i === 6) & ((j === 11) | (j === 12))) {
        idCup(i, j);
      }
      if ((i === 7) & ((j === 13) | (j === 14))) {
        idCup(i, j);
      }
      if ((i === 8) & ((j === 15) | (j === 16))) {
        idCup(i, j);
      }
    }
  }
}

hooverCup();

// Send the email
// Listen to the form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_uwrvd3p";
    const templateID = "template_at4r0c8";

    // Send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("SUCCESS!");
        document.getElementById("contactForm").reset();
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
      }
    );
  });
