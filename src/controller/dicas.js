import bdDicas from "../infra/dicasBd.js";
import DicasM from "../models/dicas.js";

export const Dicas = (app) => {
    //recebe
    app.get('/tips', (req,res) => {
        const dicas = bdDicas[Math.floor(Math.random() * bdDicas.length)]
        res.send(dicas)
    })


    //envia
    app.post('/create', (req,res) => {
        const {dicas} = req.body
        const dataM = new DicasM(dicas)
        bdDicas.push(dataM)
        res.send(dataM)
    })

}