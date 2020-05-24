const expres = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = expres()
const port = process.env.PORT ||3000

app.use(expres.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, ()=>{
    console.log('Server is setting up on port'+port)
})