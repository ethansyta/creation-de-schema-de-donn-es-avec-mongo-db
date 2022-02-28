const express = require('express');
const res = require('express/lib/response');

const app = express();

const mongoose = require('mongoose');
const model = ('./model/things');

mongoose.connect
('mongodb+srv://jdog8851:jdog8851@cluster0.2foy6.mongodb.net/openClassRoom?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req,res,next)=>{
    console.log('requete reussie');
    next();
});

app.use((req,res,next)=>{
    res.status(201);
    next();
});

app.use((req, res, next)=>{
    res.json ('votre requete est bonne');
});

module.exports = app;

app.post('/api/stuff' , (req,res,next) =>{
  delete req.body._id;
  const thing = new Thing({
    ...req.body
  });
  thing.save()
  .then(()=>res.statue(201).json({'message : connexion'}))
  .catch((erreur=>res.statue(404).json({'erreur'}))
});