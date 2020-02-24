const people = require('./people');
const weather = require('./weather');
const work = require('./work');

const main = async () => { 

    console.log("PEOPLE.JSON========================")
    console.log("\nGetPeopleByID---------------");
    try {
        const x = await people.getPersonById();
        console.log(x);
    } catch(e) {
        console.log(e);
    }

    try{
        const peopledata = await people.getPersonById(43); 
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
        const peopledata = await people.getPersonById(0);     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById(-1);     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById(1000);     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById(500);     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById();     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById(undefined);     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById(null);     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById(501);     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById(499);     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById([]);     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById("abc");      
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }

    try{
        const peopledata = await people.getPersonById(5.2);     
        console.log(peopledata); 
    }
    catch(e){
        console.log(e);  
    }
//LEXINDEX----
    console.log("\nLEXINDEX-------------------");
    try {
        const lex1 = await people.lexIndex(2);
        console.log(lex1);
    } catch(e) {
        console.log(e);
    }

    try {
        const lex1 = await people.lexIndex(-1);
        console.log(lex1);
    } catch(e) {
        console.log(e);
    }

    try {
        const lex1 = await people.lexIndex(1000);
        console.log(lex1);
    } catch(e) {
        console.log(e);
    }

    try {
        const lex1 = await people.lexIndex(500);
        console.log(lex1);
    } catch(e) {
        console.log(e);
    }




    //First Name Metrics
    console.log("First Name Metrics");
    try {
        const fnm = await people.firstNameMetrics(0);
        console.log(fnm);
    } catch(e) {
        console.log(e);
    }

    console.log("Weather.JSON========================")

    try {
        const weath = await weather.shouldTheyGoOutside("Robert", "Herley");
        console.log(weath);
    } catch(e) {
        console.log(e);
    }
    console.log("Work.JSON========================")

    try {
        const wrk1 = await work.whereDoTheyWork( " ","Tarling");
        console.log(wrk1);
    } catch(e) {
        console.log(e);
    }

    try {
        const wrk2 = await work.findTheHacker( "83.133.174.10");
        console.log(wrk2);
    } catch(e) {
        console.log(e);
    }
    try {
        const wrk3 = await work.findTheHacker("83.133.174.10");
        console.log(wrk3);
    } catch(e) {
        console.log(e);
    }
}

main();