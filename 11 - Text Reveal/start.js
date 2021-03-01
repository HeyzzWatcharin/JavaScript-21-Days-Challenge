(() => {
    function onScroll() {

        const sectionElem = Array.from(document.querySelectorAll('section'))
        sectionElem.forEach((sectionElem) => {
            const imgElem = sectionElem.querySelector('img')
            const textElem = sectionElem.querySelector('.text')

            const scrollPosition = window.pageYOffset //Position Y
            const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10 //ความสูงสุดของรูป + ความสูงของรูป หาร 10

            if (scrollPosition >= revealPosition) {
                textElem.classList.add('reveal') //Add class reveal to Text Element
            }
        })
    }

    function run() {
        document.addEventListener('scroll', onScroll);

    }

    run();
})();
