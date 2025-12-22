const db = require("../db/queries");

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render('index', {
        title: 'Home',
        messages
    })
}

async function showNewMessageForm(req, res) {
    res.render('form');
}

async function postMessage(req, res) {
    const { author, message } = req.body;
    await db.insertMessage(author, message);
    res.redirect('/');
}


module.exports = {
    getMessages,
    postMessage,
    showNewMessageForm
}