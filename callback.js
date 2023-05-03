//callback function
function add(n1, n2, callback) {
    let result = n1 + n2;
    callback(result);
}

function display(result) {
    console.log("The result is: " + result);
}

add(7, 9, display);

//Asynchronous callback functions

function welcome(name, callback) {
    setTimeout(function () {
        callback("Welcome, " + name + "!");
    }, 2000);
}

welcome("Tulay", function (result) {
    console.log(result);
});