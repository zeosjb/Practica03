const express = require('express')
const dotenv = require('dotenv')
const cors = require ('cors');
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
dotenv.config();

connectDB()

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/profile', require('./routes/profileRoute'))
app.use('/api/frameworks', require('./routes/frameworkRoute'))
app.use('/api/hobbies', require('./routes/hobbieRoute'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is Running in port ${port}`)
})