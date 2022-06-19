import Server from './app/app';
import http from 'http';
import {storage, IUser} from './local-store/store';

const server: http.Server = http.createServer();
const app: Server = new Server(server)

app.startServer(8000, 'localhost')


// app.get("/app/user", (req, res)=>{

//     res.end(JSON.stringify({ url: String(req.url), method: String(req.method)}));
//     // console.log('test')
// })

// app.get("/app/allUser", (req, res)=>{
//     console.log(typeof(req.method))
//     res.end(JSON.stringify({ test: "tester", method: String(req.method)}));
// })

let user: IUser = {
    id: "8a6e0804-2bd0-4672-b79d-d97027f9071a",
    username:"test",
    age: 11,
    hobbies: ["1"]
}

let user2: IUser = {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    username:"maxim",
    age: 30,
    hobbies: ["1", "2"]
}

storage.push(user, user2)

// console.log(storage)