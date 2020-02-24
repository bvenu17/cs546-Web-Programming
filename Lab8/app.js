const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const person = require('./data/person');
const static = express.static(__dirname + '/public');


const app = express();

app.use('/public', static);


app.use(express.json());
app.use(express.urlencoded({extenden:true}));

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.get('/', (req,res) => {
    res.render('home',{ title:"People Finder"});
})

app.post('/search', async (req,res) => {
  
  try {
    if(!req.body.personName) {
      res.status(400);
      res.render('errorHandlebar',{personName:req.body.personName})
    }
  const x = await person.getPersonByName(req.body.personName);

  if(x.length==0) {
    res.render('notFound',{personName:req.body.personName});
  } else {
    res.render('home2',{people:x,title:"People found",personName:req.body.personName});

  }
  } catch(e) {
      res.status(400).json({error:"Not found"});
  }
})

app.get('/details/:id', async (req,res) => {
  try{
    const y = await person.getPersonById(req.params.id); 
  
    res.render('details',{y:y,title:"Person Found"});
    

}
catch(e){
  res.render('errorHandlebar');

   // res.status(400).json({error:"No id "});
  }
})



app.listen(4000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});