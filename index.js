const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const data = require('./database/data.json')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get("/", (req, res) => {
    res.render("index", { data })
})

app.get("/detail/:id", (req, res) => {
    var user = data.find(val => val.id == 2)

    res.render("detail", { user })
})

app.listen(port,() =>  { console.log(`Server runner! Port: ${port}`) })
