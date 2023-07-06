// function abc (test) {
//     test();
//     return;
// }

// function randomFunction () {
//     console.log("this is a random function");
// }

// abc(randomFunction);

// abc(() => {
//     console.log("Hi I was run by abc");
// });

// you can also return a function

function robot(instruction) {
    let someJob = null;
    switch (instruction) {
        case 1:
            someJob = function () {
                console.log("say hi");
            }
            break;
        case 2:
            someJob = function () {
                console.log("say bye");
            }
            break;
    }
    return someJob;
}

function door() {
    const fun = robot(1);
    fun();
}

door();