const readline = require("readline");

let r1 = readline.createInterface({
    output: process.stdout,
    input: process.stdin
});

// r1.question("How are you doing\n>", function(answer) {
//     console.log(answer);
//     r1.question("How are you doing1\n>", function(answer) {
//         console.log(answer);
//         r1.close();
//     })
// });

function ask(Q) {
    return new Promise((res, rej) => {
        r1.question(Q, function(answer) {
            res(answer);
        });
    })
}

async function askQuestion() {
    let pkgname = await ask("what's your package name:\n>");
    let description = await ask("what's your description:\n>");
    console.log(pkgname, description);
    r1.close();
}

askQuestion();

r1.on("close", function(){
    process.exit(0);
});

