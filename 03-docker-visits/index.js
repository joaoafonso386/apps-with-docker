const express = require("express")
const redis = require("redis")

const PORT = 8081
const app = express()
const createClient = async () =>  {
    try {
        await redis.createClient().connect()
    } catch(e) {
        console.log('Redis Client Error', e)
    }

  await client.set('visits', 0)
}

const client = createClient();


app.get("/", (req, res) => {
    client.get('visits', (err, visits) =>{
        res.send(`Number of visits ${visits}`)
        client.set('visits', parseInt(visits) + 1)
    })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))