import express from 'express';
import cors from 'cors'
import routes from './routes';

const port = 3333;
const server = express();

server.use(cors());
server.use(express.json());
server.use('/', routes);


const start = async () => {
    try {
        await server.listen(port, () => {
            console.log('Running server at port', port)
        });
    } catch (error) {
        console.error('Failed to start server', error)
        process.exit(1)
    }
};

start();
