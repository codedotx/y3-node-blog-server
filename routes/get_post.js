// Source: https://firebase.google.com/docs/database/web/read-and-write

const { getDatabase, ref, get } = require("firebase/database");
const { app } = require('../config/firebase.js');

const get_post = async (postId) => {
    const database = getDatabase(app);
    const postRef = ref(database, `posts/${postId}`)
    post = await get(postRef).then((snapshot) => {
        return snapshot.val()
    })
    return post
}

module.exports = {
    get_post
}