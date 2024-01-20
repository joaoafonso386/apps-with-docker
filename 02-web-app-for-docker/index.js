const express = require("express")

const app = express()
const port = 8080 

app.get("/", (_, res) => {
    res.send("Hi from server")
})

app.listen(port, () => console.log(`listening on port ${port}`))