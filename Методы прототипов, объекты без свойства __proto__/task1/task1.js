'use strict'

let dictionary = Object.create(null, {
    toString: {
        value() { return Object.keys(this).join(',') },
        enumerable : false,
    }
})

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
    alert(key);
}

alert(dictionary);