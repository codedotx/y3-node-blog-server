// Source: https://firebase.google.com/docs/database/web/read-and-write

const { getDatabase, ref, get } = require("firebase/database");
const { app } = require('../config/firebase.js');

// Note: Snapshot is returned as string so no need to stringify JSON before displaying with Express server
const get_posts = async () => {
    const database = getDatabase(app);
    const postRef = ref(database, "posts") // get a pointer to your firebase table row
    posts = await get(postRef).then((snapshot) => { // wait for data to be retrieved before saving it
        return snapshot.val() // take a 'quick pic' of all the data and save it
    })
    return posts
}

module.exports = {
    get_posts
}