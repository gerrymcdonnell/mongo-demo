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


async function createCourse(){
    //camel case for objects
    const course=new Course({
    name:'Geds course Course',
    author:'Ged',
    tags:['angular','frontend'],
    isPublished:true
    });

    //async operation which must have the await keyword
    const result=await course.save();
    console.log(result);
}

//query mongoDB
async function getCourses(){

    /**
     * comparison operators
     * eq equal
     * ne not equal
     * gt greater than
     * lt less than
     * lte less than equal to
     * in
     * nin (not in)
     */

    const courses=await Course
    //.find({price:{$gte:10,$lte:20}})
    .find({
        author:'Ged',
        isPublished:true
    })
    .limit(5)
    .sort({
        name:1 /**asc order -1 is desc */
    })
    /**fields to select */
    .select({name:1,tags:1})
    console.log(courses);
}

getCourses();

//createCourse();
