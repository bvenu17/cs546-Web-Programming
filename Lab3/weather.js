const axios = require('axios');
const url = "https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json";
const peopleUrl="https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json";
const shouldTheyGoOutside = async (firstName, lastName) => {
    if(!firstName||!lastName) {
        throw "Arguments were not passed"
    }
    if(typeof firstName !== "string"||typeof lastName !== "string") {
        throw "Arguments are not of proper type"
    }
    //declare variables for zip  and temp
    let zip,temp;
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

    //get the zip code for the passed name
    for(let i=0;i<res.data.length;i++) {
        if(arrFn[i]==firstName&&arrLn[i]==lastName) {
            zip = res.data[i].zip
        }
    }

    //get data from weather.json
    const response = await axios.get(url);

    //for loop for traversing through weather.json
    for(let j=0;j<response.data.length;j++) {
        //get temperature value of the zip code
        if(zip==response.data[j].zip) {
             temp = response.data[j].temp;

             if(temp>=34) {
                return "Yes" + " " + firstName + " should go outside";
            } else {
                return "No" + " " + firstName + " should not go outside";
            }
        }
        
    }    
}

module.exports = {
    shouldTheyGoOutside
};