const { hello_world } = require('./routes/index.js');

const express = require('express');
const app = express();
const port = 3000 // tells us what port on your computer to listen to

app.use(express.json()) // automatically turn req to json

/* 
    GET Requests
*/
app.get('/', (req, res) => {
    res.send('GET home')
})

app.get('/posts/', (req, res) => {
    res.send('GET posts')
})

app.get('/posts/:postId/', (req, res) => {
    res.send(`GET post with post id: ${req.params.postId}`)
})

/* 
    POST Request(s)
*/
app.post('/posts/write-post/', (req, res) => {
    res.send(`POST write-post with content: ${JSON.stringify(req.body)}`)
})

/* 
    PUT Request(s)
*/
// Note: this does the same thing as the POST request above
app.put('/posts/write-post/', (req, res) => {
    res.send(`PUT write-post with content: ${JSON.stringify(req.body)}`)
})

/* 
    DELETE Request(s)
*/
app.delete('/posts/:postId/', (req, res) => {
    res.send(`DELETE post with post id: ${req.params.postId}`)
})

// start server and listen for incoming requests
app.listen(port, () => {
    console.log(`App is running at port: ${port}`);
})