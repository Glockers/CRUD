import http from 'http';


export function makeResponse(res: http.ServerResponse, code: number, messageError: any): void {
    res.writeHead(code, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({message: messageError, status: code}));
}