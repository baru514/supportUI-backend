const path = require('path')
const express = require('express')
const cors = require('cors');
require('colors')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

//


// Connect to database
connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))


  app.get('/', (_, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
  })

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
