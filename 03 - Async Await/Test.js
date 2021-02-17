
//CallBack
// const simulateAsync = (text, timeout, Callback) => {
//     setTimeout(() => {
//         console.log(text);

//         if (Callback) {
//             Callback();
//         }
//     }, timeout)
// }

//Async/Await
const simulateAsync = (text, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text === 'B' || text === 'D') return reject('B is error')
            console.log(text);
            resolve();
        }, timeout)
    })
}
async function main() {
    try {
        await simulateAsync('A', 2000)
        await simulateAsync('B', 1000)
    }
    catch (err) {
        console.error(err);
        await simulateAsync('C', 500)
        await simulateAsync('D', 100)
    }
    // simulateAsync('A', 2000)
    //     .then(() => {
    //         return simulateAsync('B', 1000);
    //     })
    //     .then(() => {
    //         return simulateAsync('C', 500);
    //     })
    //     .catch((err) => {
    //         Handle(err);
    //     })
}

main();