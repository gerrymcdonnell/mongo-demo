/**
 * first
 * npm init --yes
 * 
 * second package for mongoDb
 * npm i mongoose@5.0.1
 */
//vid 86
const mongoose=require('mongoose');

//database name
const dbname='playground';

//mongoose returns a promise
mongoose.connect('mongodb://localhost/'+dbname)
    .then(()=>console.log('Connected to MongoDB...'))
    .catch(err=>console.error('Error connecting',err));


const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
});