const head = (array) => {
    
    if(Array.isArray(array)&&array.length==0) {
        throw "Array does not have any elements";
    } else if (!Array.isArray(array)) {
        throw "It is not an array";
    } 
   
        if(typeof array === 'undefined' ) {
        throw "array is not of proper type";
        } 
    
    for(let i=0;i<array.length;i++) {
            return array[0];
    }

}

const last = (array) => {
    if(Array.isArray(array)&&array.length==0) {
        throw "Array does not have any elements";
    } else if (!Array.isArray(array)) {
        throw "It is not an array";
    } 
        if(typeof array === "undefined" ) {
        throw "array is not of proper type";
        } 
    
    for(let i=0;i<array.length;i++) {
            return array[array.length-1];
    }
}

 const remove = (array,index) => {
    if(Array.isArray(array)&&array.length==0) {
        throw "Array does not have any elements";
    } else if (!Array.isArray(array)) {
        throw "It is not an array";
    } 
    if(typeof array === "undefined" ) {
        throw "array is not of proper type";
        } 
    if(typeof index !== "number"||!Number.isInteger(index)||index>array.length||index<0) {
        throw "index is not within bounds"
    }
    array.splice(index,1);
    return array;
}

const range = (end,value) => {
    let array = [];
    if(end==null||typeof end!=='number'||end<1||!Number.isInteger(end)) {
        throw "end number does not satisy the condition";
    } else
    if(end!=null&&end>0&&typeof end === "number"&&Number.isInteger(end)) {
        for(let i=0;i<end;i++) {
            array.push(i);
        }
    } else if(end!=null&&value!=null) {
            for(let i=0;i<end;i++) {
                array.push(value);
            }
        }
    return array;
}

const countElements = (array) => {
    let counts = {};
     if (!Array.isArray(array)) {
        throw "It is not an array";
    } 
    for(let i=0;i<array.length;i++) {
       if(counts[array[i]]==null) {
           counts[array[i]]=1;
       } else counts[array[i]]++;
    }
    return counts;
}

const isEqual = (arrayOne,arrayTwo) => {
     if (!Array.isArray(arrayOne)) {
        throw "It is not an array";
    } 
    if (!Array.isArray(arrayTwo)) {
        throw "It is not an array";
    } 
    
    for(let i=0;i<arrayOne.length;i++) {
        if(arrayOne[i]!==arrayTwo[i]||arrayOne.length!=arrayTwo.length) 
        return false;
    }
    return true;
}
module.exports = {
    head,
    last,
    remove,
    range,
    countElements,
    isEqual
};