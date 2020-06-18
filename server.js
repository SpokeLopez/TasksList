// Abrimos la conexion a la base de datos
const express = require("express");
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
// const tasks = require('./controllers/tasks');
app.use(bodyParser.urlencoded({extended: true}));

const tasksRoutes = require ('./routes/tasks_routes');
//let db = new sqlite3.Database('backend');
// db.run('CREATE TABLE tasks(id INT AUTO_INCREMENT, descripcion VARCHAR(50))');
  
// Conectar a la base de datos desde el servidor.
// const sequelize = new Sequelize('backend',null,null,{
//     dialect : 'sqlite',
//     storage : './backend'
// });

app.set('view engine','pug');
app.use(tasksRoutes);

// app.post('/pendientes', function(req,res){
//     // Sanitizando la base de datos por seguridad.
//     // db.run(`INSERT INTO tasks VALUES(NULL, ?)`,req.body.descripcion);
//     res.send('Se ah insertado el registro :D ');
// });

app.listen(5000);

// Salir del servidor y de la base de datos:

// process.on('SIGINT',function(){
//     console.log('Saliste der servidor :( ');
//     db.close();
//     process.exit();
//})
