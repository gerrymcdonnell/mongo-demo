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

//schema
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
});
/**
 * compile the schema to model which gives us a class
 * create obj based on that class which maps to a document on the mongoDB
 */

//singular name pascal case for classes
const Course=mongoose.model('Course',courseSchema);
//camel case for objects
const course=new Course({
    name:'NodeJS Course',
    author:'Mosh',
    tags:['node','backend'],
    isPublished:true
});