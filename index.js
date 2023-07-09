var format = require('date-format');

let time = format.asString('dd/MM/yyyy', new Date());

console.log(time);