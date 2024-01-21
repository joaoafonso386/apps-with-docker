import express from "express"
import { createClient } from "redis"

const PORT = 8081
const app = express()
let client

try {
    client = await createClient({ legacyMode: true, socket: { host: "redis-server" } }).connect()
    console.log("Connected to Redis!"); 
    await client.set('visits', 0)
} catch(e) {
    console.log('Redis Client Error', e)
}


app.get("/", (req, res) => {
    client.get('visits', (err, visits) =>{
        res.send(`Number of visits ${visits}`)
        client.set('visits', parseInt(visits) + 1)
    })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))