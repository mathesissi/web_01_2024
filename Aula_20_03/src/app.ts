import express, {Request, Response} from "express";
import { Person } from "./model/Pessoa";

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use( express.json());

function hello(req: Request, res: Response){
    res.status(201).json({mensagem:"Hello World"});
}
app.get("/api/hello", hello)

function getIdFromParameter(req: Request, res: Response) {
    const userId = req.query.id;
    res.status(200).json({mensagem: 'Voce solicitou informacoes do usuario com o ID ${userId}'});
}
app.get('/api/user', getIdFromParameter);

function getIdFromPath(req: Request, res: Response) {
    const userId = req.params.id;
    res.status(200).json({mensagem: 'Voce solicitou informacoes do usuario com o ID ${userId}'});
    }
app.get('/api/user/:id', getIdFromPath);

function calculateAge(req: Request, res: Response) {
    const obj: {name: string, anoNascimento: number} = req.body;
    console.log ("Body>>>  ", obj);
    const person = new Person(obj.name, obj.anoNascimento);
    res.status(200).json({mensagem: `${person.nome} tem ${person.calculaIdade()} anos.`})
    }
app.post('/api/age', calculateAge);

function portLog () {
    console.log(`Servidor acessivel em: http:\\localhost:${PORT}`);
    }
app.listen(PORT, portLog);   

function appLog(){
    console.log("A API se encontra no url: http://localhost:3000")
}
app.listen(PORT, appLog);