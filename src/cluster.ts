// import cluster from 'cluster';

// import {
//     cpus
// } from 'os';
// import process from 'process';
// import Server from './app/app';
// const app: Server = new Server()


// const numCPUs = cpus().length;

// if (cluster.isPrimary) {
//     console.log(`Primary ${process.pid} is running`);

//     // Fork workers.
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }

//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`worker ${worker.process.pid} died`);
//     });
// } else {
//     app.startServer()
//     console.log(`Worker ${process.pid} started`);
// }