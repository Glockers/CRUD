import http from 'http';
import { mainController } from '../controllers/mainController';


// interface ReqCallback
type TypeCallback = (req: http.IncomingMessage, res: http.ServerResponse) => void





class Server {
    private _server: http.Server
    
    constructor(server: http.Server) {
        this._server = server
    }


    public getRequestParams(req: http.IncomingMessage){
        

        
    }
    public startServer(PORT: number, HOST: string): void {
        this._server.listen(PORT, HOST, (): void => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
        
        this.listenMethods()
    }

    
    private listenMethods(){
        this._server.on('request', (request, res) => {
            mainController(request, res)
        });
    }

}



export default Server

