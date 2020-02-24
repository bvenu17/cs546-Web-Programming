const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const static = express.static(__dirname + '/public');


const app = express();

app.use('/public', static);


app.use(express.json());
app.use(express.urlencoded({extenden:true}));

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.get('/', (req,res) => {
    res.render('home',{ title:"Prime Number Checker"});
})

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});