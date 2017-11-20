function sum(output,item){
    return output += item;
}
function sumOfArray(arrNum){
    if(!Array.isArray(arrNum)){return false};
    return arrNum.reduce(sum,0);
}
module.exports = sumOfArray;