const express = require("express")

const app = express()
const PORT = 8080 

app.get("/", (_, res) => {
    res.send("Hi from server")
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))