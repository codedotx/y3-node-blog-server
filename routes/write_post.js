const { getDatabase, ref, push } = require("firebase/database");
const { app } = require('../config/firebase.js');

const write_post = (post) => {
    const database = getDatabase(app);
    const postsRef = ref(database, "posts")
    push(postsRef, post)
}

module.exports = {
    write_post
}