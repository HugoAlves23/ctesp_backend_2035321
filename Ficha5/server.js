const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const port = 3000;

function readFile (path){
    var fileContent = fs.readFileSync(path, "utf-8");
    return fileContent;
}

function writeFile(path, data){
  fs.writeFileSync(path, data);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));



//console.log(readFile('./persons.json'))

//endpoint
//responde a um pedido HTTP GET
//1ª é a rota/path do endpoint
//2ª é o código que vai ser executado quando este endpoint for envovado
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//buscar a função readFile!
app.get('/users', (req, res) => {
    res.send(personsObject);
})

app.post('/users', (req, res) => {
  //person que vem no body  do pedido
  var persons = req.body;
  //selecionar as chaves num array e obter o seu tamanho
  var size = Object.keys(personsObject).length;
  //incrementar um valor
  size++;
  //atribuir o id igual ao tamanho +1
  persons.id = size;
  //criar uma nova chave por ex: person6 que terá o valor da person quem vem no body
  personsObject ['persons' + persons.id] = persons;

  writeFile("./persons.json", JSON.stringify(personsObject));

  //enviar  o id da pessoa que foi inserida
  res.send(persons.id+ "");
})



app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = personsObject["person" + id];

  if (person == undefined){
    res.send("This id does not exist!");
  }
  else{
    delete personsObject["person" + id];
    res.send("This id" +" "+ id +" "+ "was deleted!");
    writeFile("./persons.json", JSON.stringify(personsObject));
  }
})

app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = personsObject["person" + id];

  if (person == undefined){
    res.send("This id does not exist!");
  }
  else{
    res.send(person);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.put('/users/:id', function (req, res) {
  var id = req.params.id;
  var personFromBody = req.body;
  var person = personsObject["person" + id];

  if (person == undefined){
    res.send("This id does not exist!");
  }
  else{
    personFromBody.id = parseInt(id);
    personsObject["person" + id] = personFromBody;
    res.send(personFromBody);
    writeFile("./persons.json", JSON.stringify(personsObject));
  }
})




var personsStrings = readFile("./persons.json");
var personsObject = JSON.parse(personsStrings);