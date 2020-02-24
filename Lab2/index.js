
const test = require('./arrayUtils');
const str = require('./stringUtils');
const obj=require('./objUtils');

console.log("Head--------------------------\n");
try {
    // Should Pass
    const headOne = test.head(["re",3]);
    console.log(headOne);
 } catch (e) {
    console.error(e);
 }
 try {
    // Should Fail
    const headTwo = test.head([]);
    console.error(headTwo);
 } catch (e) {
    console.log(e);
 }

console.log("\nLast--------------------------\n");
try {
   // Should Pass
   const lastone = test.last([99,0,9,09,09,0]);
   console.log(lastone);
} catch (e) {
   console.error(e);
}
try {
   // Should Fail
   const lasttwo = test.last("gr");
   console.error(lasttwo);
} catch (e) {
   console.log(e);
}

console.log("\nREMOVE--------------------------\n");
try {
   // Should Pass
   const remove1 = test.remove([1,2,3],3);
   console.log(remove1);
} catch (e) {
   console.error(e);
}
try {
   // Should Fail
   const remove2 = test.remove([3,2,"hello",4,2,4],0);
   console.log(remove2);
} catch (e) {
   console.log(e);
}

console.log("\nRANGE--------------------------\n");
try {
   // Should Pass
   const range1 = test.range(10);
   console.log(range1);
} catch (e) {
   console.error(e);
}
try {
   // Should Fail
   const range2 = test.range(3,"arsenal");
   console.log(range2);
} catch (e) {
   console.log(e);
}
console.log("FEDsv");
try {
   // Should Pass
   const str1 = str.repeat(" ",4);
   console.log(str1);
} catch (e) {
   console.error(e);
}
const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };
try {
   // Should Pass
   const exte = obj.extend();
   console.log(exte);
} catch (e) {
   console.error(e);
}
