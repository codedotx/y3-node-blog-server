const { hello_world } = require('./routes/index.js');

const express = require('express');
const app = express();
const port = 3000 // tells us what port on your computer to listen to

/* 
Handler when request is made to the index
- req is the contents of the request sent to the server
- res is what you are sending back to the client
*/
app.get('/', (req, res) => {
    res.send(hello_world());
})

// start server and listen for incoming requests
app.listen(port, () => {
    console.log(`App is running at port: ${port}`);
})