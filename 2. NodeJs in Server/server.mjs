// console.log("Server Running...")
// npm = node package manager

// below const is santax of common js and we are using module js so it'll give error.
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})