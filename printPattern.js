var printPattern = (character) => {
if(typeof character !== 'string' ) return false;
const output = `*
**${character}*
****`;
return output;
}
module.exports = printPattern;