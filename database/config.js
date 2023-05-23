const mongoose = require('mongoose');

const user = 'user_db';
const password = 'SebmLECowXJc8EQL';
const dbname = 'isw';
const uri = `mongodb+srv://${user}:${password}@iswproyecto.ucfb00v.mongodb.net/${dbname}?retryWrites=true&w=majority` ;

const dbConnection = async() => {
    try {
        await mongoose.connect(uri);
            console.log('La conexion a la base de datos a sido exitosa');

    } catch (error) {
        console.log(error)
        throw new Error('error en la base de datos');

    }

}
module.exports = {
    dbConnection
}