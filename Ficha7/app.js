const express = require('express');
const mysql = require('mysql');
const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({extended:false}));

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password :'',
  database :'ficha7'
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get ('/persons',function(request,response){
  connection.query("select * from persons",function(err,rows,fields){
    response.send(rows);
  });
});

app.get("/persons/:id",function(request,response){
  var id =request.params.id;

  connection.query("select * from persons WHERE id=?",[id],function(err,rows,fields){
    response.send(rows);
  })
});

app.post('/persons', function (request, response){
  var person = request.body;
  
  connection.query("INSERT INTO persons SET ?", [person], function(err,rows,fields){
    response.send("Person inserted with id:" + rows.insertId);
  })
});

app.delete('/persons', function (request, response){
  var id = request.body.id;
  
  connection.query("delete from persons where ID = ?",[id],function(err,rows,fields){
    response.send("Affected Rows: " + rows.affectedRows);
  })
});

app.get('/persons/:age/:profession', function (request, response){
  var age = request.params.age;
  var profession = request.params.profession;
  
  connection.query("select * from persons where age = ? and profession = ?",[age,profession],function(err,rows,fields){
    response.send(rows);
  })
});


app.put('/persons/:id', function (request, response){
  var id = request.params.id;
  var person = request.body;
  
  connection.query("select * from persons",function(err,rows,fields){
    response.send(rows);
  })
});



