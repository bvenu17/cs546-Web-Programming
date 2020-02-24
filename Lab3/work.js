const axios = require('axios');
const workUrl = "https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json";
const peopleUrl="https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json";

const whereDoTheyWork = async (firstName, lastName) => {
  if(!firstName||!lastName) {
    throw "Arguments were not passed"
  }
  if(typeof firstName !== "string"||typeof lastName !== "string") {
      throw "Arguments are not of proper type"
  }
  //declare variable for getting ssn
  let ssn, company=" ", jobTitle ="" , willBeFired;

  //get data from people.json
  const res = await axios.get(peopleUrl);
  //declare empty arrays for storing first names and last names
  let arrFn = [], arrLn = [];

  //push all the firstnames and lastnames in an array 
  for(let i=0;i<res.data.length;i++) {
      arrFn.push(res.data[i].firstName);
      arrLn.push(res.data[i].lastName);
  }
  //check if firstname passed as argument exists in the array
  if(!arrFn.includes(firstName)) {
    throw "First name doesn't exist"
  }
  //check if lastname passed as argument exists in the array
  if(!arrLn.includes(lastName)) {
      throw "Last name doesn't exist"
  }

  //get ssn for the passed name
  for(let i=0;i<res.data.length;i++) {
    if(arrFn[i]==firstName&&arrLn[i]==lastName) {
        ssn = res.data[i].ssn;
    }
  }

  //get data from work.json
  const wrk = await axios.get(workUrl);
  //return wrk.data[0].jobTitle;

  //for loop for traversing through work.json
  for(let j=0;j<wrk.data.length;j++) {
      //get company, job title and (will they be fired) data for that name
      if(ssn==wrk.data[j].ssn) {
           if(wrk.data[j].willBeFired===true) {
              return firstName + " " + lastName + " - " + wrk.data[j].jobTitle + " at " + wrk.data[j].company + ". They will be fired.";
           } else {
              return firstName + " " + lastName + " - " + wrk.data[j].jobTitle + " at " + wrk.data[j].company + ". They will not be fired.";
           }
      }
  }    
}


const findTheHacker = async (ip) => {
  if(!ip) {
    throw "Arguments not passed"
  }
  if(typeof ip !== "string") {
    throw "Argument is not of proper type"
  }
  //get data from work.json
  const wrk = await axios.get(workUrl);
  //declare empty array for inserting all ip values
  const arrIp = [];
  //insert all ip values in the array
  for(let i=0;i<wrk.data.length;i++) {
    arrIp.push(wrk.data[i].ip);
  }
  //check if ip passed as argument exists in the json
  if(!arrIp.includes(ip)) {
    throw "ip address not available"
  }

  //GET SSN FOR THE IP ADDRESS
  let ssn;
  for(let i=0;i<wrk.data.length;i++) {
    if(arrIp[i]==ip) {
        ssn = wrk.data[i].ssn;
    }
  }
  //get data from people.json
  const res = await axios.get(peopleUrl);
  //return the hackers name from people.json
  for(let i=0;i<res.data.length;i++) {
    if(ssn==res.data[i].ssn) {
      return res.data[i].firstName + " " + res.data[i].lastName + " is the hacker!"
    }
  }
}
module.exports = {
  whereDoTheyWork,
  findTheHacker
};