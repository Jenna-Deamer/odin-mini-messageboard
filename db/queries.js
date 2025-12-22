const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query('SELECT message, author,timeStamp FROM messages');
    console.log(rows)
    return rows;
}

async function insertMessage(author, message) {
    await pool.query(
        "INSERT INTO messages (message, author) VALUES ($1, $2)",
        [message, author]
    );
}

module.exports = {
    getAllMessages,
    insertMessage
}