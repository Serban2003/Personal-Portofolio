function isElementInViewport (el) {

  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= document.documentElement.clientHeight && /* or $(window).height() */
      rect.right <= document.documentElement.clientWidth /* or $(window).width() */
  );
}

function onVisibilityChange(el, callback) {
  var old_visible;
  return function () {
      var visible = isElementInViewport(el);
      console.log(visible);
      if (visible == true) {
          if (typeof callback == 'function') {
              callback();
          }
      }
  }
}

// var el = document.getElementById("about-description");
// var callback_time = 0;

// var handler = onVisibilityChange(el, function() {
 
//   $(window).unbind('DOMContentLoaded load resize scroll'); 
// });

// $(window).on('DOMContentLoaded load resize scroll', handler);

function typeWriter(i, eleRef, letters, delay){
  if (i < letters.length){
    if (letters[i] == '<' && letters[i + 1] == 'b') {
      $(eleRef).append("<br>");
      i += 3;
  }
    else $(eleRef).append(letters[i]);
    i++;
    setTimeout(function(){
      typeWriter(i, eleRef, letters, delay);}, delay);
  }
}

function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  typeWriter(i, eleRef, letters, delay);
}

$(document).ready(
  function () {
    typeSentence("Hi there! <br>Welcome to my personal  <br>portofolio...", "#sentence");
  });

function openMenu() {
  document.getElementById("hamburger-menu").style.width = "250px";
}

function closeMenu() {
  document.getElementById("hamburger-menu").style.width = "0";
}