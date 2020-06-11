(() => {
  // เริ่มเขียนโค้ด

  function onScroll() {
    const sectionElems = Array.from(document.querySelectorAll("section"));
    sectionElems.forEach((sectionElem) => {
      const imgElem = sectionElem.querySelector('img');
      const textElem = sectionElem.querySelector('.text');
      const scrollPosition = window.pageYOffset; //calculate position
      const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;
      //แสดง 1 ส่วน 10 ของรูปภาพ  offsettop คือค่าสูงสุดของ img , offsetHeight คือค่าความสูงของรูป

      if (scrollPosition >= revealPosition) {
        textElem.classList.add('reveal');
      }
    });
  }

  function run() {
    document.addEventListener("scroll", onScroll);
  }

  run();
})();
