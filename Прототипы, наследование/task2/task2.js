'use strict'

Function.prototype.defer = function (ms) {
    return (...args) => {
        setTimeout(() => this(...args), ms)
    }
}

function f(a, b) {
    alert( a + b );
}

f.defer(2000)(4, 5);