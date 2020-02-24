const axios = require('axios');
const url = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';


const  getPersonById = async (id) => {
    const res = await axios.get(url);
    if(!id||typeof id !== "number"||id>res.data.length||id<1||!Number.isInteger(id)) {
        throw "incorrect id"
    }
    return res.data[id-1].firstName + " " + res.data[id-1].lastName;
}

const lexIndex = async (index) => {
    const res = await axios.get(url);

    if(index === undefined||typeof index !== "number"||index<0||index>=res.data.length||!Number.isInteger(index)) {
        throw "incorrect index"
    }
    res.data.sort((first,second) => {
        return first.lastName > second.lastName ? 1 : -1
    })
    return res.data[index].firstName + " " + res.data[index].lastName;
}

const firstNameMetrics = async () => {
    const res = await axios.get(url);
    const a = [];
    let totalLetters =0, totalVowels =0, totalConsonants = 0;

    //push all first names to array a
    for(let i=0;i<res.data.length;i++) {
         a.push(res.data[i].firstName);
    }

    for(let i=0;i<a.length;i++) {
        //get total letters in the array
        totalLetters+=a[i].length;
        
        //get total vowels and consonants in the array
        for(j=0;j<a[i].length;j++) {
              if(a[i][j]=="a"||a[i][j]=="A"||a[i][j]=="e"||a[i][j]=="E"||a[i][j]=="i"||a[i][j]=="I"||a[i][j]=="o"||a[i][j]=="O"||a[i][j]=="u"||a[i][j]=="U") {
                  totalVowels++;
              } else totalConsonants++
        }
    
        //get longest firstname name in the array
         longestName = a.reduce((prev, next) => {
            if (prev.length > next.length) {
                return prev;
            } else if (prev.length === next.length){
               return prev;
            } else {
               return next;
            }
          });

        //get shortest firstname in the array
        shortestName = a.reduce((prev, next) => {
            if (prev.length < next.length) {
                return prev;
            } else if (prev.length === next.length){
               return prev;
            } else {
               return next;
            }
          });
    }

    //store all values in an object and return it
    let obj = {totalLetters,totalVowels,totalConsonants,longestName,shortestName};
    return obj;
}

module.exports = {
    getPersonById,
    lexIndex,
    firstNameMetrics
};
