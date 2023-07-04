function abc (test) {
    test();
    return;
}

function randomFunction () {
    console.log("this is a random function");
}

abc(randomFunction);

// abc(() => {
//     console.log("Hi I was run by abc");
// });