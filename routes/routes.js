import express from 'express';
import fs from 'fs';
import path from 'path';

const routes = express.Router();
const __dirname = path.resolve();

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

routes.get('/agregar', (req, res) => {
    const { nombre, precio } = req.query;
    const deporte = { nombre,precio };

    const {deportes} = JSON.parse(fs.readFileSync('data/deportes.json', 'utf8'));
    deportes.push(deporte);
    fs.writeFileSync('data/deportes.json', JSON.stringify({deportes}));
    res.send("Agregado con exito")
})

routes.get('/deportes', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data/deportes.json', 'utf8'));
    res.send(data);
})

routes.get('/editar', (req, res) => {
    const { nombre, precio } = req.query;
    const data = JSON.parse(fs.readFileSync('data/deportes.json', 'utf8'));
    const deporte = data.deportes.find(deporte => deporte.nombre === nombre);
    deporte.precio = precio;
    fs.writeFileSync('data/deportes.json', JSON.stringify(data));
    res.send("Editado con exito")

})

routes.get('/eliminar', (req, res) => {
    const { nombre } = req.query;
    const data = JSON.parse(fs.readFileSync('data/deportes.json', 'utf8'));
    data.deportes = data.deportes.filter(deporte => deporte.nombre !== nombre);
    fs.writeFileSync('data/deportes.json', JSON.stringify(data));
    res.send("Eliminado con exito")
})
export default routes;