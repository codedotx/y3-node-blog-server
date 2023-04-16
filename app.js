const express = require('express');

const { get_posts } = require('./routes/get_posts.js');
const { get_post } = require('./routes/get_post.js');
const { write_post } = require('./routes/write_post.js');
const { delete_post } = require('./routes/delete_post.js');

const app = express();
const port = 3000 // tells us what port on your computer to listen to

app.use(express.json()) // automatically turn req to json

/* 
    GET Requests
*/
app.get('/', (req, res) => {
    res.send('GET index')
})

app.get('/posts/', async (req, res) => {
    const posts = await get_posts() // wait for posts to be retrieved from firebase
    res.send(posts)
})

app.get('/posts/:postId/', async (req, res) => {
    const posts = await get_post(req.params.postId) // grab postId from URL
    res.send(posts)
})

/* 
    POST Request(s)
*/
app.post('/posts/write-post/', (req, res) => {
    write_post(req.body)
    res.send(`POST write-post with content: ${JSON.stringify(req.body)}`)
})

/* 
    DELETE Request(s)
*/
app.delete('/posts/:postId/', (req, res) => {
    delete_post(req.params.postId)
    res.send(`DELETE post with post id: ${req.params.postId}`)
})

// start server and listen for incoming requests
app.listen(port, () => {
    console.log(`App is running at port: ${port}`);
})