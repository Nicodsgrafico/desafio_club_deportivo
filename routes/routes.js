import express from 'express';
import fs from 'fs';
import path from 'path';

const routes = express.Router();
const __dirname = path.resolve();

routes.get('/', (req, res) => {
    res.send("Hola mundo");
})

export default routes;