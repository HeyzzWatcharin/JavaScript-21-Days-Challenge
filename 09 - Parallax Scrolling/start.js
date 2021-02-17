(() => {
    function onScroll() {
        const moonElem = document.querySelector('.moon');
        const wishElem = document.querySelector('.wish');

        // console.log(window.scrollY);
        moonElem.style.transform = `translate(${window.scrollY * 0.7}%,${window.scrollY * -0.7}%)` //เลื่อนขึ้นและเลื่อนไปทางขวานะจ๊ะ

        wishElem.style.transform = `translateY(${window.scrollY * -3.2}%)` //Set text scroll down
    }

    function run() {
        document.addEventListener('scroll', onScroll)
    }

    run()
})();
