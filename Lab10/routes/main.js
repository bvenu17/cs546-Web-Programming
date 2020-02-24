const express = require("express");
const router = express.Router();
const authentication = require("../public/js");


router.get('/login', (req,res) => {
    res.redirect("/");
})

router.get('/', (req,res) => {
    try {
        if (req.session.userId) {
            return res.redirect("/private");
        } else {
            console.log("there was an error");
            return res.render('home',{title: "Login"});
        }
    } catch (e) {
        res.status(404).json({ error: e.message });
    }})


router.post('/login', async (req,res) => {
    try {
    let x =await  authentication.bcryptUsage.authenticate(req.body.username,req.body.password);
    if(x>=0) {
        let id = x;
        let dets = await authentication.bcryptUsage.getDetails(id);
        console.log(dets);
        req.session.userId=dets._id;
        req.session.AuthCookie = req.sessionID;

        console.log(req.session.userId);
        // res.redirect('/private');
        return res.status(200).redirect("/private");
    } else {
        res.status(401).render('home', { error: "Invalid username or password" });
        console.log("Erroroooorrooo");
    }
    } catch(e) {
        res.status(404).json({ error: e.message });

    }
})

router.get('/private', async (req,res) => {
    try {
     let id = req.session.userId;
     const userInfo = await authentication.bcryptUsage.getDetails(id);
     console.log(userInfo);
     res.render('private',{ title: "Private",userInfo });
    } catch(error) {
     res.status(404).json({ error: error.message });
 
    }
 })
 
 router.get('/logout', async (req, res) => {
    req.session.destroy(function() {
        res.clearCookie('AuthCookie');
        return res.redirect("/");
      });
})

module.exports=router;