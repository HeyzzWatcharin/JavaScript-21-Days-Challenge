(() => {
  const second = 1000;
  const min = second * 60;
  const hour = min * 60;
  const day = hour *24 ;

  function setelment(id,text){
    const element = document.getElementById(id);
    element.innerText = text;  
  }

  function countDown(){
    const now = new Date().getTime(); //ดึงเวลาปัจจุบันออกมา
    const purposeday = new Date('June 2, 2020 00:00:00').getTime();
    const unixTimeLeft = purposeday - now;
    setelment('days', Math.floor(unixTimeLeft / day));
    setelment('hours', Math.floor(unixTimeLeft % day / hour));
    setelment('minutes', Math.floor(unixTimeLeft % hour / min));
    setelment('seconds', Math.floor(unixTimeLeft % min / second));
  }

  function run(){
    countDown();
    setInterval(countDown, second); //run in second time
  }

  run();
})();


