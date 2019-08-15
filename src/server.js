const server = require("./index");
const dotenv = require("dotenv");
dotenv.config();

server.listen(process.env.DB_PORT || 4444);

console.log("Servidor aberto na porta", process.env.DB_PORT);
