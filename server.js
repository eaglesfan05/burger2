const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");
const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8080,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};

connection.connect(function (err) {
  if (err) {
    console.log("error connecting", +err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route.
app.get("/", function (req, res) {
  connection.query("SELECT * FROM burger;", function (err, data) {
    if (err) {
      console.log(err)
    }

    res.render("index", { burger: data });
  });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
