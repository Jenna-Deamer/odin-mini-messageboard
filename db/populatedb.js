const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  author VARCHAR (50)
);

INSERT INTO messages (author, message) 
VALUES
  ('Jen', Hello this is a message'),
  ('Bob','Another message'),
  ('Jen','Woohoo');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: DATABASE_URL
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();