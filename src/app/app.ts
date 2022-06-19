import http from 'http';


// interface ReqCallback
type TypeCallback = (req: http.IncomingMessage, res: http.ServerResponse) => void


class Server {
    private _server: http.Server
    
    constructor(server: http.Server) {
        this._server = server
    }


    public get(route: string, callBack: TypeCallback){
        this._server.on('request', (request, res) => {
            res.setHeader('Content-Type', 'application/json');
            if(route == request.url){
                callBack(request, res)
            }
        });
    }
    
    public startServer(PORT: number, HOST: string): void {
        this._server.listen(PORT, HOST, (): void => {
            console.log(`Server running on  http://localhost:${PORT}`);
        })
    }

    

}



export default Server

