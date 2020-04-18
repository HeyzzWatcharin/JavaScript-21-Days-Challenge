(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  function similateAsyncAPI(text,timeout){ //เรียกใช้ฟังก์ชั่นหลังจาก Timeout 
    setTimeout(() => console.log(text),timeout);
  }

  similateAsynchro('A',1000); //ผ่านไป 1 วิ จะ Console.log A ออกมา
  similateAsynchro('B',500);
  similateAsynchro('C',100);

  // 2. Callback //นิยมใน NOde JS
  function similateAsyncAPI(text,timeout,Callback){ //callback จะเป็นฟังก์ชั่นที่ถูกเรียกใช้หลังจากฟังกชั่นของเราทำงานเสร็จแล้ว
    setTimeout(() => {
      console.log(text)

      if(Callback){ //เช็คว่าใน Function ที่ pass มานั้นมี callback หรือไม่ เพราะถ้าไม่ใช่เงื่อนไขจะ Error เพราะเราส่ง UNdefind มา 
        Callback();
      }
    },timeout)
  }
  //callback hell คือการเรียก function เยอะเกิน
  similateAsyncAPI('A',1000,()=>{
    similateAsyncAPI('B',500,()=> {
      similateAsyncAPI('C',100);
    });
  });
  // 3. Promise
  function similateAsyncAPI(text,timeout){ // concept ของ promise คือ ใช้  เรียกลงไปเรื่อยๆ
     return new Promise((resolve,reject) => {
      setTimeout(() => {
          if (text == 'B') return reject('B got rejected'); //เมื่อเรียกใช้งาน reject จะ told error from promise ให้
        console.log(text);
        resolve(); //บอกตัว PRomise ว่า การทำงานของ Asynchronus เสร็จสิ้นแล้วและโค๊ดเราทำงานเสร็จแล้ว
      },timeout);
    });
  }

  similateAsyncAPI('A',1000)
    .then(()=>{ //then คือ method ที่อยู่ใน Resolve โดย จะถูกเรียกใช้เมื่อ Asynchornus เสร็จก่อน
      return similateAsyncAPI('B',500);
    })
    .then(()=>{
      return similateAsyncAPI('C',100);
    })
    .catch((error)=>{ // .catch คือ method นี้จะถูกเรียกเมื่อเกิด error ขึ้นภายใน Funtion 
        console.error(error);
    })
  
  // 4. Async/Await
  function similateAsyncAPI(text,timeout){ 
     return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (text == 'B') return reject('B got rejected');
        console.log(text);
        resolve();
      },timeout);
    });
  }
  
  async function run(){ // นำหน้าฟังก์ชั่นต้องใส่ async และใน function ต้องมี await
    try{ //try catch คือการ handle
      await similateAsyncAPI('A',1000)
      await similateAsyncAPI('B',500)
      await similateAsyncAPI('C',100)
    }
    catch(error){
      console.error(error)
    }
  }
  run();
})();
