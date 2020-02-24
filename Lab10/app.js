const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const static = express.static(__dirname + '/public');
const authentication = require('./public/js/bcryptUsage');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const configRoutes = require('./routes');



const app = express();

app.use('/public', static);


app.use(cookieParser()); //for cookies

app.use(express.json());
app.use(express.urlencoded({extenden:true}));

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(session({
    name: 'AuthCookie',
    secret: 'some secret string!',
    resave: false,
    saveUninitialized: true,
    cookie: {path: '/', httpOnly: true, secure: false, maxAge: null }
  }))

app.use(function(req, res, next) {
    let status = "authentication unsuccessful";
    if (req.session.AuthCookie) {
      status = "authenticated successful";
    }
    console.log(`[${new Date().toUTCString()}]: ${req.method} ${req.originalUrl} (${status})`);
    next();
});



app.use('/private', function(req, res, next) {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if(req.session.userId) {
       return next();
    } else {
       console.log("session id not there")
    }
  });

 

  configRoutes(app);



app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});