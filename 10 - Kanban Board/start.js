(() => {
  // เริ่มเขียนโค้ด

  let dragingElem;

  function ondragstart(){
    dragingElem = this;
  }

  function onDrop(){
    this.append(dragingElem);
    dragingElem = null;
  }

  function onDragOver(event){
    event.preventDefault(); //พอเกิด dragover จะ ยกเลิก Behave beover ตัว drag ปกติออกไป
  }

  function onDragEnter(event){
    event.preventDefault();
  }

  function run(){
    const taskElems =Array.from(document.querySelectorAll('.task')) ; //ดึงทั้งหมดที่มีคลาส task
    const dropZoneElems = Array.from(document.querySelectorAll('.drop-zone'))
    
    taskElems.forEach((taskElems) => {
      taskElems.addEventListener('dragstart',ondragstart)
    })

    dropZoneElems.forEach((dropZoneElems) => {
      dropZoneElems.addEventListener('drop',onDrop) //เมื่อเกิด Event 'drop' นี้จะคอล ondrop
      dropZoneElems.addEventListener('dragover',onDragOver);
      dropZoneElems.addEventListener('dragenter',onDragEnter)
    })
  }

  run();
})();
