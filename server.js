const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');

dotenv.config();
connectDb()



const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/' , (req,res)=>{
    res.send('<h1>HELLO</h1>')
})

const PORT = 8080 || process.env.PORT

app.listen(PORT , ()=>{
    console.log(`Server is running at ${PORT}`)
})