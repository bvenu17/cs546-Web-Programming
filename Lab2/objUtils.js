const extend = (...args) => {

    let g={};
    //let temp={};
    for(i=0;i<args.length;i++) {
        if(typeof args[i] !== "object" || typeof args[i] == "undefined" ||args.length<2||Array.isArray(args[i])) {
            throw "Error";
        }        
        let temp= args[i];
        for(let value in temp) {        
         //  g[value]=temp[value];


            if(!(value in g)) {
                g[value]=temp[value];
            }
        }
    }
    return g;

    //const x = Object.assign({},...args);
   // return x;
}
//https://gomakethings.com/merging-objects-with-vanilla-javascript/

const smush = (...args) => {
    for(let i=0;i<args.length;i++){
        if(typeof args[i] !== "object" || typeof args[i] == "undefined" ||args.length<2||Array.isArray(args[i])) {
            throw "Error";
        }  
    }
   
    const x = Object.assign({},...args);
   
    return x;
}

const mapValues = (object,func) => {
    if(!object||typeof object !== "object" || typeof object == "undefined" || Array.isArray(object)|| !func|| typeof func !== "function") {
        throw "Error";
    } 
    Object.keys(object).map(function(key,index) {
        object[key]=func(object[key]);
    });
    return object;
}
module.exports = {
    extend,
    smush,
    mapValues
};