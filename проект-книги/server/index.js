require('dotenv').config()
// import 'firebase/firestore'
// import 'firebase/auth'
const express = require('express')
const authRouter = require('./routes/authRouter')
const cors = require('cors')
const errorMiddleware =require('./middleware/error-middelware')

const PORT = process.env.PORT||5000
const app = express()

app.use(express.json())
app.use(cors())
app.use("/auth", authRouter)
app.use(errorMiddleware);


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (e){
        console.log(e)
    }
}

start()