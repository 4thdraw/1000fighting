const express = require("express");
const app = express();
const port = 8001;
const path = require("path");
const mysqlapi = require('./api/dbconfig')
const formtag = require('./api/form')

app.use(express.static(path.join(__dirname, './project/build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./project/build/index.html"))
})


app.use('/store', mysqlapi)

app.use('/promotion', formtag)

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "publish/nopage.html"))
})

app.listen(port, () => {
    console.log(`localhost ${port} onload`)
})