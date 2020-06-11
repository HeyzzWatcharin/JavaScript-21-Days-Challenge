(() => {
  // เริ่มเขียนโค้ด

  function random(min , max){ //random min ถึง max
    return Math.floor(Math.random() * (max - min + 1 )) + min;
  }

  function createDuck(){
    return ducks = [...Array(5)].map(() => {
      return {
        x: random(0,window.innerWidth),
        y: window.innerHeight, // เริ่มบินจากล่างสุดของหน้าจอ จึงไม่ต้อง Random
        speedX: random(-50,50),
        speedY: random(5,10)
      }
    });
  }

  function setupDuckelment(duck){

    const duckElem = document.createElement(`div`);
    duckElem.className = 'duck'; //call duck css in css
    duckElem.style.left = `${duck.x}px`; //ระวังในการเรียก เนื่องจาควรเรียกเป็น PIxel
    duckElem.style.top = `${duck.y}px`;
    duckElem.style.backgroundImage = 'url(./left-1.png)'
    document.body.appendChild(duckElem); //add elment into body web
    
    return {duck,duckElem};
  }

  function moveDuck(){
    const { left, top } = duckElem.getBoundingClientRect(); //function return position elment in web window 
    duck.x = left + duck.speedX;
    duck.y = top - duck.speedY; //เคลื่อนที่ขึ้นบนเรื่อยๆ 
    duckElem.style.left = `${duck.x}px`;  
    duckElem.style.top = `${duck.y}px`;
  }

  function run(){
    const ducks = createDuck();
    const duckElems =  ducks.map(setupDuckelment); //function map is return to array
    duckElems.forEach(({duck,duckElem}) => {
      setInterval(() => moveDuck(duckElem,duck),100);
    })
  }

  run();
})();
