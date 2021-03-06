import express from 'express';

import routes from './routes';
import bodyParser from 'body-parser';
import './database';
import cors from 'cors'; 

class App {
    server= express();

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(bodyParser.json());
        this.server.use(cors());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;