import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

// routes imports
import weather from './routes/location/weather'

dotenv.config()

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(
  bodyParser.json({
    limit: '50mb',
  })
)
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
  })
)
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  })
)

// routes
app.use('/location/weather', weather)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})