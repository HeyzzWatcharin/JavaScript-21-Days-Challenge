(() => {
  // เริ่มเขียนโค้ด

  const canvas = document.getElementById('painting');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext('2d');

  let previousPoint = {x:0,y:0};

  //calculate distance
  function getDistance(previousPoint,currentpoint){
    return Math.sqrt((previousPoint.x - currentpoint.x)**2 + (previousPoint.y - currentpoint.y)**2);
  }

  function onmouseMove({pageX,pageY}){ //พิกัด X,Y
    const currentpoint = { x:pageX,y:pageY}; 
    const distance = getDistance(previousPoint,currentpoint);
    const opacity = Math.min(0.5,1/distance);

    context.beginPath(); //บอก ว่าจะเริ่มวาด
    context.lineCap = 'round'; //เซ็ตจุดจบของเส้นให้เป็นวงกลม
    context.linejoin = 'round';
    context.linewidth = Math.random()/distance*40;
    context.strokeStyle =`rgba(222,10,109, ${opacity})`;
    

    //start paint
    context.moveTo(previousPoint.x,previousPoint.y);
    context.lineTo(currentpoint.x,currentpoint.y);

    context.stroke();
    context.closePath()

    //update
    previousPoint = currentpoint;
  }

  function onmouseEnter({pageX,pageY}){
    previousPoint.x = pageX;
    previousPoint.y = pageY;
  }

  function run(){
    canvas.addEventListener('mousemove',onmouseMove)
    canvas.addEventListener('mouseenter',onmouseEnter)
  }
  run();
})();
