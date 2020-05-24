const expres = require('express')
const Task = require('../models/task')
const router = new expres.Router()

router.post('/tasks',(req,res)=>{
    const task = new Task(req.body)
    task.save().then(()=>{
        res.status(201).send(task)
    }).catch((e)=>{
        res.status(400)
        res.send(e)
    })
})


router.get('/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks)
    }).catch((e)=>{
        res.status(500).send()
    })
})

router.get('/tasks/:id',(req,res)=>{
    const _id = req.params.id

    Task.findById(_id).then((task)=>{
        if(!task){
            return res.status(404).send()
        }

        res.send(task)
    }).catch((e)=>{
        res.status(500).send()
    })
})


router.patch('/tasks/:id',async(req,res)=>{
    const updates =Object.keys(req.body)
    const allowedUpdates =['Description','Completed']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send({error:'invalid updates!'})
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id , req.body, {new: true,runValidators:true})
        
        if(!task){
            return res.status(404).send() 
        }
        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})


router.delete('/tasks/:id', async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send() 
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})


module.exports = router