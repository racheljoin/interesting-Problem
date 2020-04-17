console.log('1');
// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
    new Promise(function(f) {
        console.log('4');
        f();
    }).then(function() {
        console.log('5')
    })
// })
// process.nextTick(function() {
//     console.log('6');
// })
new Promise(function(f) {
    console.log('7');
    f();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    // process.nextTick(function() {
    //     console.log('10');
    // })
    new Promise(function(f) {
        console.log('11');
        f();
    }).then(function() {
        console.log('12')
    })
})