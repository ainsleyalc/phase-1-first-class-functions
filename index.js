function callBack() {
    return 1 + 1
}
function receivesAFunction (callBack) {
    callBack()
}

receivesAFunction(callBack)

function returnsANamedFunction () {
    return callBack
}


function returnsAnAnonymousFunction() {
    return function () {
        console.log("Hello World")
    }
}
