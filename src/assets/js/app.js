// get the element to animate
let element = document.getElementById('count-stats');
let elementHeight = element.clientHeight;

// listen for scroll event and call animate function

document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  let windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  let scrollY = window.scrollY || window.pageYOffset;
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  let scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  let elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

let animateComplete = true;
// animate element when it is in view
function animate() {

  // is element in view?
  if (inView()) {
    if (animateComplete) {
      if (document.getElementById('state1')) {
        const countUp = new CountUp('state1', document.getElementById("state1").getAttribute("countTo"));
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      }
      if (document.getElementById('state2')) {
        const countUp1 = new CountUp('state2', document.getElementById("state2").getAttribute("countTo"));
        if (!countUp1.error) {
          countUp1.start();
        } else {
          console.error(countUp1.error);
        }
      }
      if (document.getElementById('state3')) {
        const countUp2 = new CountUp('state3', document.getElementById("state3").getAttribute("countTo"));
        if (!countUp2.error) {
          countUp2.start();
        } else {
          console.error(countUp2.error);
        }
      }
      animateComplete = false;
    }
  }
}

if (document.getElementById('typed')) {
  let typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 200,
    startDelay: 500,
    loop: true
  });
}



if (document.getElementsByClassName('page-header')) {
  window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    let bgParallax = document.querySelector('.page-header');
    let limit = bgParallax.offsetTop + bgParallax.offsetHeight;
    if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit) {
      bgParallax.style.backgroundPositionY = (50 - 10 * scrollPosition / limit * 3) + '%';
    } else {
      bgParallax.style.backgroundPositionY = '50%';
    }
  });
}
