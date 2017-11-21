const sum = (sum,nextValue)=>(sum + nextValue);
const multiply = (multiply,nextValue)=>(multiply * nextValue);
const isNumber = (item)=> (item!== undefined && typeof(item) === 'number' && !isNaN(item));
const doMath = (operation = "add" ,...rest)=>{
    const filterRest = rest.filter(isNumber);
    if(operation === "add"){
        return filterRest.reduce(sum,0);
    }else if(operation === "mul"){
        return filterRest.reduce(multiply,1);       
    }else{
        return false;
    }
}
module.exports = doMath;



//Original

// const doMath = (...arr)=>{
//      const [operation,...rest] = arr
//     if(operation === "add"){
//         return rest.reduce((sum,nextValue)=> sum + nextValue ,0);
//     }else if(operation === "mul"){
//         return rest.reduce((multiply,nextValue)=>multiply * nextValue ,1);       
//     }   
// }
// module.exports = doMath;