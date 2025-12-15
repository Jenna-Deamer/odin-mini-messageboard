const { Router } = require('express');
const newMessageRouter = Router();

const messages = require('../messages');

newMessageRouter.get('/', (req, res) => {
	res.render('form');
});
newMessageRouter.post('/', (req, res) => {
	const { messageUser, messageText } = req.body;
	messages.push({ text: messageText, user: messageUser, added: new Date() });
	res.redirect('/');
});

module.exports = newMessageRouter;
