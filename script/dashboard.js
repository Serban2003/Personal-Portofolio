var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
		console.log('Element is fully visible in screen');
}, { threshold: [1] });

observer.observe(document.querySelector("#nav-top"));

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      if(letters[i] == '<' && letters[i+1] == 'b'){
        $(eleRef).append("<br>");
        i+=4;
      }
      else $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  $(document).ready(
    async function() {
    await typeSentence("Welcome to my <br> personal portofolio...", "#sentence");
    await waitForMs(2000);
  });