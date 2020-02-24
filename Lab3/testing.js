const people = require("./people");  
const weather = require("./weather"); 
const work = require("./work"); 

async function main(){
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

    try{
        const peopledata = await people.getPersonById(1000); 
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
        const peopledata = await people.getPersonById(0);  
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
        const peopledata = await people.getPersonById(1);  
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
        const peopledata = await people.getPersonById(501);  
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    } 

    try{
    
        const peopledata = await people.lexIndex(500);       
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        const peopledata = await people.lexIndex(null);       
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        const peopledata = await people.lexIndex(undefined);       
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        const peopledata = await people.lexIndex(0);       
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        const peopledata = await people.lexIndex("");       
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        const peopledata = await people.lexIndex( );       
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        const peopledata = await people.lexIndex([]);       
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        const peopledata = await people.lexIndex(-1);       
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        const peopledata = await people.lexIndex(5.2);       
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        const peopledata = await people.lexIndex("abc");        
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        const peopledata = await people.lexIndex(499);        
        console.log(peopledata); 
    }
    catch(e){
        console.log(e); 
    }

    try{
    
        
        const peopledata = await people.firstNameMetrics();
        console.log(peopledata); 
         

    } 
    catch(e){
        console.log(e);  
    }  

    try{
        const weatherdata = await weather.shouldTheyGoOutside(null, "Barajaz");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside("Scotty", null);
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside(undefined, "Barajaz");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside("Scotty", undefined);
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside(null, null);
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside(undefined, undefined);
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside("Scotty", "Barajaz");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside("Calli", "Ondrasek");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside();
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside("Bob");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside("Hiloni","Mehta");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside(123, "abc"); 
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    } 

    try{
        const weatherdata = await weather.shouldTheyGoOutside([],2.3 ); 
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await weather.shouldTheyGoOutside("Bob", "Smith"); 
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork(null, "Barajaz");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork("Scotty", null);
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork(undefined, "Barajaz");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork("Scotty", undefined);
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork(null, null);
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork(undefined, undefined);
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork("Scotty", "Barajaz");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork("Calli", "Ondrasek");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork();
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork("Bob");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork("Hiloni","Mehta");
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork(123, "abc"); 
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    } 

    try{
        const weatherdata = await work.whereDoTheyWork("Hi",2.3 ); 
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const weatherdata = await work.whereDoTheyWork("Bob", "Smith"); 
        console.log(weatherdata);
    }
    catch(e){
        console.log(e); 
    }

    try{
        const workOutput = await work.whereDoTheyWork("Demetra", "Durrand");  
        console.log(workOutput); 

    }
    catch(e){
        console.log(e);
    }

    try{
        const workOutput = await work.whereDoTheyWork("Hank", "Tarling"); 
        console.log(workOutput); 

    }
    catch(e){
        console.log(e); 
    }

    try{
        const workOutput = await work.whereDoTheyWork(); 
        console.log(workOutput); 

    }
    catch(e){
        console.log(e);
    }

    try{
        const workOutput = await work.whereDoTheyWork("Bob"); 
        console.log(workOutput); 

    }
    catch(e){
        console.log(e);
    }

    try{
        const workOutput = await work.whereDoTheyWork("Bob", "Smith");  
        console.log(workOutput); 

    }
    catch(e){
        console.log(e);
    }

    try{
        const workOutput = await work.findTheHacker("79.222.167.180");
        console.log(workOutput);

    }
    catch(e){
        console.log(e);   
    }

    try{
        const workOutput = await work.findTheHacker();
        console.log(workOutput);

    }
    catch(e){
        console.log(e);
    }

    try{
        const workOutput = await work.findTheHacker();
        console.log(workOutput); 

    }
    catch(e){
        console.log(e);
    } 

    try{
        const workOutput = await work.findTheHacker("79.222.167.180");
        console.log(workOutput);

    }
    catch(e){
        console.log(e);   
    }

    try{
        const workOutput = await work.findTheHacker("120.242.167.180");
        console.log(workOutput); 

    }
    catch(e){
        console.log(e);   
    }

    try{
        const workOutput = await work.findTheHacker();
        console.log(workOutput);

    }
    catch(e){
        console.log(e);
    }

    try{
        const workOutput = await work.findTheHacker(null);
        console.log(workOutput);

    }
    catch(e){
        console.log(e);
    }
    try{
        const workOutput = await work.findTheHacker(1234);
        console.log(workOutput);

    }
    catch(e){
        console.log(e);
    }
    try{
        const workOutput = await work.findTheHacker("79222167180");
        console.log(workOutput);

    }
    catch(e){
        console.log(e);
    }
    
    try{
        const workOutput = await work.findTheHacker(undefined);
        console.log(workOutput);

    }
    catch(e){
        console.log(e);
    }
    try{
        const workOutput = await work.findTheHacker(5.6);
        console.log(workOutput);

    }
    catch(e){
        console.log(e);
    }
    try{
        const workOutput = await work.findTheHacker(["79.222.167.180"]);
        console.log(workOutput);

    }
    catch(e){
        console.log(e);
    }
    try{
        const workOutput = await work.findTheHacker({ip : "79.222.167.180" });
        console.log(workOutput);

    }
    catch(e){
        console.log(e);
    }  

}

main();