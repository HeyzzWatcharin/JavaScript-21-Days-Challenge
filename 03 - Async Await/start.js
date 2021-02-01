(() => {

  // function simulateAsyncAPI(text, timeout) {
  //   setTimeout(() => console.log(text), timeout);
  // }


  // 2.Callback
  // function simulateAsyncAPI(text, timeout, callback) {
  //   setTimeout(() => {
  //     console.log(text);
  //     if (callback) {
  //       callback();
  //     }
  //   }, timeout);


  // }

  // function run() {
  //   simulateAsyncAPI('A', 1000, () => {   //calbackHell
  //     simulateAsyncAPI('B', 500, () => {
  //       simulateAsyncAPI('C', 100);
  //     })
  //   })
  // }
  // run();

  //3.Promise แก้ปัญหา callback Hell!
  // function simulateAsyncAPI(text, timeout) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if(text === 'B') reject ('B got rejected');
  //       console.log(text);
  //       resolve(); //บอกตัว promise ว่าการทำงานของ Async เสร็จแล้ว
  //     }, timeout)
  //   })
  // }

  // simulateAsyncAPI('A', 1000)
  //   .then(() => { //then ถูกเรียกใช้เมื่อ Async ทำงานเสร็จและมีการเรียกใช้ resolve
  //     return simulateAsyncAPI('B', 500); //ถ้า return เป็น promise อีก then จะรอให้ promise ข้างในให้ทำงานเสร็จก่อน
  //   })
  //   .then(() => {
  //     return simulateAsyncAPI('C', 100);
  //   })
  //   .catch((error) => { // .catch จะถูกเรียกใช้เมื่อ เกิด error ภายในฟังก์ชั่น
  //     console.log(error);
  //   })

  //Async / Await
  function simulateAsyncAPI(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === 'B') reject('B got rejected');
        console.log(text);
        resolve(); //บอกตัว promise ว่าการทำงานของ Async เสร็จแล้ว
      }, timeout)
    })
  }

  async function run() {
    try { //try, catch คือ การ Handle error ที่มาจาก Async
      await simulateAsyncAPI('A', 1000);
      await simulateAsyncAPI('B', 500);
      await simulateAsyncAPI('C', 100);
    } catch (error) {
      console.error(error);
    }
  }
  run();
})();
