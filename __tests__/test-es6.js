const generatePattern = require('../generatePattern');
//Success Test
test('Test for input Correct Array', () => {
const result = generatePattern([2,1,4]);
expect(result).toBe(`**2
*1
****4`);
 });

//failure test
test('Test for input wrong number',  ()=> {
const result = generatePattern([0,-1,-2]);
expect(result).toBe(`0
-1
-2`);
 });
test('Test for input More Array Input', ()=> {
const result = generatePattern([2,1,4,5]);
expect(result).toBe(`**2
*1
****4
*****5`);
});

