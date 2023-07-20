import express from 'express'
import path from 'path';
import {requestTime, logger} from './middlewares.js'
import serverRoutes from "./routes/servers.js";

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT ?? 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
console.log(app.get('views'))

app.use(express.static(path.resolve(__dirname,'static'))) //middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(requestTime)
app.use(logger)

app.use(serverRoutes)


app.get('/', (req, res) => {
    res.render('index', {title: 'Main Page', active: 'main'})
})

app.get('/features', (req, res) => {
    res.render('features', {title: 'Features Page', active: 'features'})
})

// app.get('/',(req, res) => {
//     // res.send('<h1>Hello ExpressJS</h1>')
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })
// app.get('/features',(req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })



// app.get('/download',(req, res) => {
//     console.log(req.requestTime)
//     res.download(path.resolve(__dirname, 'static', 'index.html'))
// })

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})