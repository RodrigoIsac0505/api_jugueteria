// Import mysql module
const mysql = require("mysql")
// Setup database connection parameter
const config = {
    host: "localhost",
    user: "root",
    password: "root",
    port: "3308",
    database: "farmacias_arroba"
};

const pool = mysql.createPool(config);

pool.getConnection(function (err, connection) {
    try {
        if (err) {
            // La conexión no se cierra, siemplemente se libera para que se pueda usar por otro proceso
            console.log("Se conecto");
            connection.release();
        } else {
            // Si hay algún error en este punto el recurso ya se encuentra de nuevo disponible en el pool.
            console.log("Se conecto");
        }
    } catch (e) {
        console.log("ha ocurrido un error: " + e);
    }
})

module.exports = pool;