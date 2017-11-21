const printStar = (item)=>{
    let stars = '';
    for (let i = 1; i <= item; i++) 
    {
        for (let j = 1; j <= i; j++)
        {
            stars = `${stars}*`;
        }
        if(i<item) {
            stars += '\n';
        }   
    }
    return stars;
};
module.exports = printStar;