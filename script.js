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

///contact us js

//material contact form animation
$('.contact-form').find('.form-control').each(function() {
  var targetItem = $(this).parent();
  if ($(this).val()) {
    $(targetItem).find('label').css({
      'top': '10px',
      'fontSize': '14px'
    });
  }
})
$('.contact-form').find('.form-control').focus(function() {
  $(this).parent('.input-block').addClass('focus');
  $(this).parent().find('label').animate({
    'top': '10px',
    'fontSize': '14px'
  }, 300);
})
$('.contact-form').find('.form-control').blur(function() {
  if ($(this).val().length == 0) {
    $(this).parent('.input-block').removeClass('focus');
    $(this).parent().find('label').animate({
      'top': '25px',
      'fontSize': '18px'
    }, 300);
  }
})
