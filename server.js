import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/routes/postRoutes.js";

// **Cria uma instância do Express para criar a aplicação web**
const app = express();
app.use(express.static("uploads"))
routes(app);

// **Inicia o servidor na porta 3000**
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000");
});

