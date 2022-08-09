import express from 'express';
import { Dicas } from './controller/dicas.js';

const app = express()
const port = 4000


app.use(express.json())

Dicas(app)

app.listen(port, ()=> {
    console.log(`[POST] Hospedado em: http://localhost:4000/create`)
    console.log(`[GET] Hospedado em: http://localhost:4000/tips`)
})