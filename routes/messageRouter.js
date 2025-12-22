const { Router } = require('express');
const messageController = require('../controller/messagesController')
const messageRouter = Router();


// messageRouter.get('/', (req, res) => {
//     res.render('form');
// });
// messageRouter.post('/', (req, res) => {
//     const { messageUser, messageText } = req.body;
//     messages.push({ text: messageText, user: messageUser, added: new Date() });
//     res.redirect('/');
// });

messageRouter.get('/', messageController.getMessages);

module.exports = messageRouter;
