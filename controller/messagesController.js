const db = require("../db/queries");

// validation
const { body, validationResult, matchedData } = require("express-validator");

const authorCharErr = 'Must only contain letters.'
const authorLengthErr = 'Must be between 1 and 50 characters.'
const messageErr = "Must be between 1 and 250 characters."

const validateMessage = [
    body('author').trim()
        .isAlpha().withMessage(`Author: ${authorCharErr}`)
        .isLength({ min: 1, max: 50 }).withMessage(`Author: ${authorLengthErr}`),
    body('message').trim()
        .isLength({ min: 1, max: 250 }).withMessage(`Message: ${messageErr}`)

]
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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).render('form', {
            errors: errors.array()
        });
    }

    const { author, message } = req.body;
    await db.insertMessage(author, message);
    res.redirect('/');
}



module.exports = {
    getMessages,
    postMessage,
    showNewMessageForm,
    validateMessage
}