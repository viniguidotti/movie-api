import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import controller from './controllers/index'
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME
const app = express()

app.get('/health', (req, res) => {
    res.send('App Running')
})

app.use(cors({
    origin: ['http://localhost:4200']
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('', controller)

app.use((req, res) => {
    res.status(404)
})

app.listen(PORT, () => {
    console.log(`Server running with success on ${HOSTNAME}:${PORT}`)
})

