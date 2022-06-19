import Server from './app/app';
import http from 'http';
import {storage, IUser} from './local-store/store';

const server: http.Server = http.createServer();
const app: Server = new Server(server)

app.startServer(8000, 'localhost')


app.get("/app/user", (req, res)=>{

    res.end(JSON.stringify({ url: String(req.url), method: String(req.method)}));

})

app.get("/app/allUser", (req, res)=>{
    console.log(typeof(req.method))
    res.end(JSON.stringify({ test: "tester", method: String(req.method)}));
})

// let user: IUser = {
//     id: "test",
//     username:"test",
//     age: 11,
//     hobbies: ["1"]
// }

// storage.push(user, user)

// console.log(storage)