import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";

if(cluster.isPrimary) {
    console.info(`primary :  ${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.addListener("exit",(worker) => {
        console.info(`worker-${worker.id} is exiting`);
        cluster.fork();
    })
}

if(cluster.isWorker){
    const server = http.createServer((req, res) => {
        res.write(`Responses from process ${process.pid}`);
        res.end();
        process.exit();
    });

    server.listen(3000);
    console.info(`start cluster ${process.pid}`);
}