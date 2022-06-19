import http from 'http';
import {
    makeResponse
} from '../../Error/error';
import * as uuid from 'uuid';
import {
    IUser, storage
} from '../../local-store/store';


function getBody(req: http.IncomingMessage): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
        try {
            const buffers = [];

            req.on('data', (chunk: Buffer) => {
                buffers.push(chunk);
            });
            req.on('end', () => {
                const data = Buffer.concat(buffers).toString();
                resolve(JSON.parse(data))
            });
        } catch (error) {
            reject(error);
        }
    });
}

function isCorrectBody(body: IUser): boolean {
    const { username, age, hobbies } = body;
    const checkName = Boolean(username && typeof username === 'string');
    const checkAge = Boolean(age && typeof age === 'number');
    const checkHobbies = Boolean(Array.isArray(hobbies) && hobbies.every(hobby => typeof hobby === 'string'));

    return checkName && checkAge && checkHobbies;
}

export async function createController(req: http.IncomingMessage, res: http.ServerResponse) {
    let url: string[] = req.url.split('/')
    url.shift()

    if (!req.url?.startsWith('/api/users')) {
        makeResponse(res, 404, "router not found")
    }

    const body = await getBody(req);


    if (isCorrectBody(body)){
        storage.push({...body, id: uuid.v4()});
        makeResponse(res, 201, "user was added");
    } else {
        makeResponse(res, 400, 'Input data is invalid');
    }
}