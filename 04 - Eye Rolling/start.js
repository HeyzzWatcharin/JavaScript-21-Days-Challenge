(() => {
  // เริ่มเขียนโค้ด
  function run(){
    const bodyElem = document.querySelector('body');
    const eyeElem  = document.querySelectorAll('.eye');

    function noMousemove({pageX , pageY}) {
     eyeElem.forEach((eyeElem) =>{
       const {left,top} =  eyeElem.getBoundingClientRect();
       const eyecenterx = left + eyeElem.offsetWidth/2;
       const eyecentery = top + eyeElem.offsetHeight/2;
       const radian = Math.atan2(pageX - eyecenterx,pageY-eyecentery);
       const angle = (radian / Math.PI) * -180;
       eyeElem.style.transform = `rotate(${angle}deg)`
     });
    }

    bodyElem.addEventListener('mousemove',noMousemove)
  }

  run();
})();
