const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  author VARCHAR (50),
   timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (author, message) 
VALUES
  ('Jen', 'Hello this is a message'),
  ('Bob','Another message'),
  ('Jen','Woohoo');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();