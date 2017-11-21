const printStar = require('../printStar');
const printNumbers = require('../printNumbers');
const maxPrinter = require('../maxPrinter');
//Success Test
test('Test for print star', () => {
const result = printStar(3);
expect(result).toBe(`*
**
***`);
});
test('Test for print numbers', () => {
const result = printNumbers(3);
expect(result).toBe(`1
22
333`);
});
test('Test for function passed printStar', () => {
const spy = jest.fn();
maxPrinter(spy);
expect(spy).toHaveBeenCalled();
});
test('Test for function passed printNumbers', () => {
const spy = jest.fn();
maxPrinter(spy);
expect(spy).toHaveBeenCalled();
});
test('Test for function passed have been call with Max Value in Call Back', () => {
const spy = jest.fn();
maxPrinter(spy,1,3,0);
expect(spy).toHaveBeenCalledWith(3);
});