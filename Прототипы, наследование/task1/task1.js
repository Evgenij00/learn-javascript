'use strict'

Function.prototype.defer = function (ms) {
    setTimeout(this, ms)
}

function f() {
    alert(5);
}

f.defer(5000);