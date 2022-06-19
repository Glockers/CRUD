import http from 'http';
import { createController } from './modules/createController';
import { getController } from './modules/readController';





export function mainController(req: http.IncomingMessage, res: http.ServerResponse) {
    const method = req.method
    res.setHeader('Content-Type', 'application/json');

    if (method === "GET") {
        getController(req, res)
    } else if (method === "POST") {
        createController(req, res)
    } else if (method === "DELETE") {
        getController(req, res)
    } else if (method === "PUT") {
        getController(req, res)
    }
}