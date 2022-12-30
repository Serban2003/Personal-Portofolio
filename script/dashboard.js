var observer = new IntersectionObserver(async function (entries) {
  if (entries[0].isIntersecting === true)
    await typeSentence("$ xdg-open me.png<br>$ cat about-me<br>", "#about-description", 100, 1);
    observer.disconnect();
  }, {
  threshold: [1]
});

observer.observe(document.querySelector("#about-description"));

async function typeSentence(sentence, eleRef, delay = 100, type = 0) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    if (letters[i] == '<' && letters[i + 1] == 'b') {
      $(eleRef).append("<br>");
      i += 3;
    } else $(eleRef).append(letters[i]);
    i++
  }

  if(type == 1){  
    var element = document.querySelector("#description-output")
    $(element).css('color', 'white');
  }
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

$(document).ready(
  async function () {
    await typeSentence("Hi there! <br>Welcome to my personal  <br>portofolio...", "#sentence");
    await waitForMs(2000);
  });

function openMenu() {
  document.getElementById("hamburger-menu").style.width = "250px";
}

function closeMenu() {
  document.getElementById("hamburger-menu").style.width = "0";
}