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
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};

console.log(connection);

connection.connect(function(err) {
  if (err) {
    console.log("error connecting", + err.stack);
    throw err;
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route.
app.get("/", function (req, res) {
  console.log("making query");
  connection.query("SELECT * FROM burger;", function (err, data) {
    if (err) {
      console.log(err)
    }
    console.log(data)
    res.render("index", { burger: data });
  });
});


app.post("/api/burger", function(req, res){
  connection.query("INSERT INTO burger (burger_name) VALUES (?)", [req.body.burger_name], function (err, result){
    if (err){
      return res.status(500).end();
    } else{
      // res.json({ id: result.insertId });
      console.log({ id: result.insertId });

      // res.send("/");
      res.send('/');
    } 
  })
})


app.put("/api/burger/:id", function(req, res){
  connection.query("UPDATE burger SET devoured = 1 WHERE id = ?", [req.params.id], function (err, result){
    if (err){
      console.log(err);
    } else if (result.changedRows === 0) {
      return res.status(200).end();
      
    }else{
      res.send('/')
    }
  })
})
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
