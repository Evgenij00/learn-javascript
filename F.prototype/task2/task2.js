'use strict'

function F(name) {
    this.name = name;
}

//теперь нет свойства constructor
F.prototype = {}

let obj = new F('petya');

let obj2 = new obj.constructor('borya');

//undefined
alert(obj2.name);