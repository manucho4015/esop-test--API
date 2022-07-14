require('express-async-errors')
require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
}


app.use(cors(corsOptions))

const connectDB = require('./db/connect')

const authRouter = require('./routes/auth')

app.use(express.json())

app.use('/api/v1/users', authRouter)



const PORT = process.env.PORT || 5000


const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}...`)
})
    } catch (error) {
        console.log(error)
    }
}

start()