const bcryptjs = require('bcryptjs');
const userData = require('./users');

const authenticate = async (username,password) => {
    let auth,id;
    for(let i=0;i<userData.length;i++) {
        if(username==userData[i].username) {
            if(await bcryptjs.compare(password,userData[i].hashedPassword)==true) {
                id=userData[i]._id;
                console.log("Matched password" + id);
            
            } else {
                //auth = false;
                console.log("password not matched");
            }
        }

    }
    return id;
}

const getDetails = async (id) => {
    let obj = {};
    for(let i=0;i<userData.length;i++) {
        if(id==userData[i]._id) {
            obj = userData[i];
        }
    }
    return obj;
}


module.exports = {
    authenticate,
    getDetails
};