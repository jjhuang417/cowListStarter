const express = require('express');
const Cow = require('../database/mongo/index.js')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let db;

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.json());

let loggin = () => {
  console.log('This is Cow Model', Cow.find({}));
}

loggin();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/cows', (req, res) => {
  Cow.find({}, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})

app.post('/cows', (req, res) => {
  Cow.find({}, (error, data) => {
    if (error) {
      res.status(404).send(error);
    } else {
      let newCow = new Cow (req.body);
      newCow.save();
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
    readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
      if(choice==='mongo') {
        console.log('Your db is Mongo');
        db = require('../database/mongo');
      } else if(choice === 'mysql') {
        console.log('Your db is mysql');
        db = require('../database/mysql');
      } else {
        console.log('Stope node, restart and try again, valid options are mysql and mongo')
      }
    })

});
