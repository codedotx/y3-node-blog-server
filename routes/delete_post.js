const { getDatabase, ref, remove } = require("firebase/database");
const { app } = require('../config/firebase.js');

const delete_post = (postId) => {
    const database = getDatabase(app);
    const postsRef = ref(database, `posts/${postId}`)
    remove(postsRef)
}

module.exports = {
    delete_post
}