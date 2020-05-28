(() => {
  // เริ่มเขียนโค้ด
  function onscroll(){
    const moonElem = document.querySelector('.moon');
    const wishElem = document.querySelector('.wish'); //add class wish

    moonElem.style.transform =  `translate(${window.scrollY * 0.7}%, ${window.scrollY * -0.7}%)`; //Set style
    wishElem.style.transform =  `translateY(${window.scrollY * -1.2}%)`; //Set style
  }

  function run(){
    document.addEventListener('scroll',onscroll);
  }

  run();
})();