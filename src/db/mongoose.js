const mongoose = require('mongoose')
//const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})



// const me = new User({
//     name:'    AakshY  ',
//     email:'mEil@MEAD.IO',
//     password:' 4098FFK! '

// })

// me.save().then(()=>{
// console.log(me)
// }).catch((error)=>{
//     console.log('Error',error);
    
// })


// const Task = mongoose.model('Task',{
//     Description:{
//         type: String,
//         required:true,
//         trim:true

//     },
//     Completed:{
//         type:Boolean,
//         default:false
//     }
// })


// const task = new Task({
//     Description:'I will do it     ',
//     Completed:true
// })

// task.save().then(()=>{
//     console.log(task)
//     }).catch((error)=>{
//         console.log('Error',error);
        
//     })