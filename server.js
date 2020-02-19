const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");
const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.log("error connecting", +err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  