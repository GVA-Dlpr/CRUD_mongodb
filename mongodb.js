const mongodb = require('mongodb')
const MongoClient= mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error,client)=>{

    if(error)
    {
        return console.log('Unable to connect to database')
    }

    //console.log('Connected scuessfully !')

    const db =client.db(databaseName)



/* INSERTING ONE AT A TIME IN USERS COLLECTION */

    db.collection('users').insertOne({
        _id:id,
        name:'Vikram',
        age:26
    }, (error,result)=>{
        if(error)
        {
            return console.log('Unable to insert data');
        }

        console.log(result.ops)
    })

/*INSERTING MANY IN USERS COLLECTION */
    db.collection('users').insertMany([
        {
            name:'Aman',
            age:20
        },
        {
            name:'Aakash',
            age:22
        }
    ], (error,result)=>{
        if(error)
        {
            return console.log('Unable to insert documents !')
        }
        console.log(result.ops)
    })


/*INSERTING MANY AT A TIME IN TASK COLLECTION */
db.collection('task').insertMany([
    {
        description:'These are Avengers. Heros of America',
        completed:true
    },
    {
        description:'Thor is the Leader',
        completed:false
    },
    {
        description:'But he is the strongest',
        completed:true
    }
], (error, result)=>{
    if(error)
    {
        return console.log('Unable to insert documents !')
    }
    console.log(result.ops)
})



/////////////////////////////////////////////////////////////////////////////////

/* SERCHING 1 DOCUMENT IN COLLECTION */
db.collection('users').findOne({_id:new ObjectID("5ec2636193148648e46fe487")},(error,user)=>{
    if(error)
    {
        return console.log('Unable to fetch data')
    }

    console.log(user)
})

/*SERCHING & COUNTING  IN THE USERS COLLECTION */
db.collection('users').find({age:21}).toArray((error,users)=>{
console.log(users)
})

db.collection('users').find({age:21}).count((error,count)=>{
    console.log(count)
    })


/* SEARCHING IN THE TASK COLLECTION */

    db.collection('task').findOne({_id: new ObjectID("5ec269a89fac0436bc5e2d5b")},(error,task)=>{
        console.log(task)
    })
    
    db.collection('task').find({completed:false}).toArray((error,task)=>{
        console.log(task)
    })

/* UPDATE ONE RECORD  */

    db.collection('users').updateOne({
        _id: new ObjectID("5ec261639905d93c100df0be")
    },{
        $inc:{
            age:5
        }
    }).then((result)=>{
    console.log(result)
    }).catch((error)=>{
        console.log(error)
    })


/* UPDATING MANY RECORDS*/

    db.collection('task').updateMany({
        completed:false
    },{
        $set:{
            completed:true
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

/* DELETING MULTOPLE RECORDS*/

    db.collection('users').deleteMany({
        age:26
    }).then((result)=>{
            console.log(result.deletedCount)
         }).catch((error)=>{
            console.log(error)
        })

    /*DELETING A SINGLE RECORD */

db.collection('task').deleteOne({ 
    description:"But he is the strongest"
}).then((result)=>{
            console.log(result.deletedCount)
          }).catch((error)=>{
             console.log(error)
         })



})


