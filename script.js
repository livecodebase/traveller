let activeSlideNo = 1;
const totalSlideNo = 4;
const slideNum = document.getElementById("slideNo");

/*
// old way to write function
  function setSlide(slideNo) {
  slideNum.innerHTML = "0" + slideNo;
}
 */

//new way to write function
setSlide = (slideNo, elid) => {
  slideNum.innerHTML = "0" + slideNo;
  activeSlideNo = slideNo;
  console.log(elid);
};

function addSlide() {
  let newNo = activeSlideNo + 1;
  let slideNo = checkAddslide(newNo);
  activeSlideNo = slideNo;
  slideNum.innerHTML = "0" + activeSlideNo;
}

function subSlide() {
  let newNo = activeSlideNo - 1;
  let slideNo = checkSubSlide(newNo);
  activeSlideNo = slideNo;
  slideNum.innerHTML = "0" + activeSlideNo;
}

function checkSubSlide(newSlideNo) {
  if (newSlideNo === 0) {
    return totalSlideNo;
  } else {
    return newSlideNo;
  }
}

function checkAddslide(newSlideNo) {
  if (newSlideNo > totalSlideNo) {
    return 1;
  } else {
    return newSlideNo;
  }
}

/* //Jquery
$(document).ready(function() {
  $("#carouselExampleControls").carousel(1);
});
 */
