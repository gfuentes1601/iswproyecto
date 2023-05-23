const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
       // this.port = process.env.PORT;
        this.usersPath = '/api/usuarios';
        this.cuadrillasPath = '/api/cuadrillas';
        this.asistenciasPath = '/api/asistencias';
        this.port = 3000;
        //conexion a base de datos
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio público
        this.app.use(express.static('public'));
    }

    routes() {
        // this.app.use(this.usersPath, require('../routes/users'));
        this.app.use(this.usersPath, require('../routes/usuarios'));
        this.app.use(this.cuadrillasPath, require('../routes/cuadrillas'));
        this.app.use(this.asistenciasPath, require('../routes/asistencias'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;