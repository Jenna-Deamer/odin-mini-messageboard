const { Router } = require('express');
const messageController = require('../controller/messagesController')
const messageRouter = Router();

messageRouter.get('/', messageController.getMessages);
messageRouter.get('/new', messageController.showNewMessageForm)
messageRouter.post('/new', messageController.validateMessage, messageController.postMessage);

module.exports = messageRouter;
