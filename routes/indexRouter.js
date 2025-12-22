const { Router } = require("express");
const indexRouter = Router();

// indexRouter.get('/', (req, res) => {
//     res.render('index', { title: 'Mini Messageboard', messages: messages })
// })

indexRouter.get("/messageDetails/:id", (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id) || !messages[id]) {
        return res.status(404).send('404 - Message not found');
    }
    res.render("messageDetails", { message: messages[id], id })
})

module.exports = indexRouter;