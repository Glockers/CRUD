import http from 'http';
import * as uuid from 'uuid';
import { makeResponse } from '../../Error/error';
import {
    storage
} from '../../local-store/store';




export function getController(req: http.IncomingMessage, res: http.ServerResponse) {
    let url: string[] = req.url.split('/')
    url.shift()

    if (!req.url?.startsWith('/api/users')) {
        makeResponse(res, 404, "router not found")
    }
 
    if (req.url === "/api/users") {
        res.write(
            JSON.stringify(storage)
        )
        res.end()
    } else if (url.length === 3) {
        if (uuid.validate(url[2])) {
            getUserById(url[2]);
            res.end()
        } else {
            makeResponse(res, 400, 'userId is invalid');
        }
    }
    else {
        makeResponse(res, 404, "router not found")
    }

    function getUserById(id: string): void {
        const user = storage.find(user => user.id === id);

        if (user) {
            makeResponse(res, 200, user);
        } else {
            makeResponse(res, 404, 'User not found');
        }
    }
}