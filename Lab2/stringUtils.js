const capitalize = (string) => {
    if(!string||typeof string !=="string") {
        throw "String doesn't exist";
    }
    let string2="";
    let string1 = string[0].toUpperCase();
    for(let i=1;i<string.length;i++) {
        string2=string2 + string[i].toLowerCase();
    }
    return string1+string2;
}

const repeat = (string,num) => {
    if(!string||typeof string !=="string") {
        throw "String doesn't exist";
    }
    if(num===null||num<0||typeof num !== "number") {
        throw "Number is less than 0 or doesn't exist";
    }
    let temp = "";
    for(let i=0;i<num;i++) {
        temp = temp + string;
    }
    return temp;
}

const countChars = (string) => {
    let counts = {};
    if(typeof string !=="string") {
        throw "String doesn't exist";
    }
    for(let i=0;i<string.length;i++) {
       if(counts[string[i]]==null) {
           counts[string[i]]=1;
       } else counts[string[i]]++;
    }
    return counts;
}

module.exports = {
capitalize,
repeat,
countChars
};