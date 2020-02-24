const axios = require('axios');
const url = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';


const  getPersonByName = async (id) => {
    const res = await axios.get(url);
   // const x =parseInt(id);
   let arr=[] ;
   let count=0;

    for(let i=0;i<res.data.length;i++) {
        if(res.data[i].firstName.includes(id)||res.data[i].lastName.includes(id)) {
            arr.push(res.data[i]);
            count++;
        }
        if(arr.length == 20)
        {
            return arr;
        }
   }

    return arr;

}

const  getPersonById = async (uid) => {
    const res = await axios.get(url);
    const id = parseInt(uid);
    if(!id||typeof id !== "number"||id>res.data.length||id<1||!Number.isInteger(id)) {
        throw "incorrect id"
    }
    let obj = {}
    //let obj = {uid,firstName,lastName};
    for(let i=0;i<res.data.length;i++) {
        //obj = res.data[i];
        if(res.data[i].id==id) {
           obj = res.data[i];
        } 
    }
    return obj;
}

module.exports = {
getPersonByName,
getPersonById
};