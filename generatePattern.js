
const generateStar = (item)=>{
    let stars = '';
    for(let i=0; i< item;++i){
         stars = `${stars}*`; 
    }
    return `${stars}${item}`;
}
const generatePattern = (nums) => {
    if(!Array.isArray(nums)){return false};
        let patternArray =  nums.map(generateStar)
        return patternArray.join('\n');
    }
module.exports = generatePattern;