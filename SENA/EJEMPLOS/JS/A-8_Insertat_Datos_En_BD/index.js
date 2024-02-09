//instalar la libreria de mysql de node para que funciones
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

//insertar un resgistor
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('julian', 'Cra 6')";
        if (err) throw err;
        console.log("Inserted");
        con.end(); 
    });
});
*/


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('julian', 'Cra 6'), ('juan', 'Cra 23'), ('luis', 'Cll 23'), ('carlos', 'Cll 3'), ('martha', 'trasversal 11'), ('maria', 'Cll 43')"; 
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Inserted");
        con.end(); 
    });
});

