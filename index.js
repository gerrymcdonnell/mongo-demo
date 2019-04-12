/**
 * first
 * npm init --yes
 * 
 * second package for mongoDb
 * npm i mongoose@5.0.1
 */
const mongoose=require('mongoose');

const dbname='playground';

//mongoose returns a promise
mongoose.connect('mongodb://localhost/'+dbname)
    .then(()=>console.log('Connected to MongoDB...'))
    .catch(err=>console.error('Error connecting',err))