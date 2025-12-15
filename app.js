const express = require("express");
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

app.get("/new", (req, res) => {
  res.render("newMessage");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app listening on ${PORT}`);
});
