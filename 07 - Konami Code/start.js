(() => {

  const konamicode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ]

  let index = 0;

  function onKeyDown(event){
    event.key === konamicode[index] ? index++ : index = 0;  // check condition ว่า กดตรงกับ Konamicode มั้ย เขียนแบบ shot hand if-condition

    console.log(event.key); //print key input 

    if(konamicode.length === index){
      startSnowing(); //Show snow function
    }
  }
 
  function run (){
    document.addEventListener('keydown',onKeyDown); //รับ input ลูกศรเข้ามา
 }

 run();

})();
