import express from 'express'
import cors from 'cors'
import {routes} from './src/routes.js'

const app = express()

app.use(cors({
    origin: true
}))

app.use(express.json())
const port = 3001

app.use(routes)

app.listen(port, function(){
    console.log(`Server listen on port${port}`)
})
