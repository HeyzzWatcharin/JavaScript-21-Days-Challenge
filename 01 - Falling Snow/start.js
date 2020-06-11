(() => {
  
  function random(min,max){ //randow ค่า
    return Math.floor(Math.random()*(max-min+1)) + min; 
    //floor คือการปัดเศษลง
  }

  function setup(){
    const canvas = document.getElementById('falling-snow-canvas'); //get value falling snow from index.html
    canvas.width = window.innerWidth;//set width snow == window width
    canvas.height = window.innerHeight; //set Height snow == window size
    
    return {
      canvas, 
      canvasContext: canvas.getContext('2d'), //วาด 2d  
      numberOfSnowBalls: 250 
    }
  }

function createSnowBalls(canvas,numberOfSnowBalls){
  return x = [...Array(numberOfSnowBalls)].map(() => {
    return {
      x: random(0,canvas.width),
      y: random(0,canvas.height),
      opacity : random(0.5,1),
      radius : random(2,4),
      speedX: random(1,0), //กำหนดความเร็วแกน x
      speedY: random(1,2)
    }
  })
}

function movesnowball(canvas,snowBall){
  snowBall.x += snowBall.speedX;
  snowBall.y += snowBall.speedY;

  if (snowBall.x > canvas.width) {  //เช็คว่าตกขอบหน้าจอไหมถ้าตก ก็ให้ทำตามเงื่อนไข บลาๆๆ
    snowBall.x = 0;
  } else if (snowBall.x < 0) {
    snowBall.x = canvas.width;
  }

  if (snowBall.y > canvas.height) {
    snowBall.y = 0;
  }
}

function drawSnowBall(canvasContext,snowball){
    canvasContext.beginPath() // บอก canvas ว่ากำลังจะเริ่มวาด
    canvasContext.arc(snowball.x,snowball.y,snowball.radius,0,Math.PI*2)
    canvasContext.fillStyle = `rgba(255,255,255,${snowball.opacity})`
    canvasContext.fill();
}



  function run() {
    const { canvas, canvasContext, numberOfSnowBalls } = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
   

    setInterval(()=>{
      canvasContext.clearRect(0,0,canvas.width,canvas.height);
      snowBalls.forEach((snowBall) => drawSnowBall(canvasContext,snowBall))
      snowBalls.forEach((snowBall) => movesnowball(canvas,snowBall))
    })
  }

  run();
})();
