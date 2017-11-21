const printStar = require('./printStar');
const printNumbers = require('./printNumbers');
const maxPrinter = (fn,...arr)=>{
    let maxValue =  Math.max(...arr); 
        return fn(maxValue);
};
//  console.log(maxPrinter(printStar,1,3,0));
//  console.log(maxPrinter(printNumbers,1,4,2));
module.exports = maxPrinter;