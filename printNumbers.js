const printNumbers = (item)=>{
    let numChar = '';
    for (let i = 1; i <= item; i++) 
    {
        for (let j = 1; j <= i; j++)
        {
            numChar = `${numChar}${i}`;
        }
        if(i<item) {
           numChar += '\n';
        }   
    }
    return numChar;
};
module.exports = printNumbers;