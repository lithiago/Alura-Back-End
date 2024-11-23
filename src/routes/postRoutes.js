import express from "express";
import multer from "multer";
import cors from "cors";
import {listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controller/postController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})
const routes = (app) => {

    // **Habilita o middleware para analisar o corpo das requisições JSON**
    // Isso permite que a aplicação receba e processe dados em formato JSON
    app.use(express.json());
    app.use(cors(corsOptions))
    // **Rota para listar todos os posts**
    // Responde a requisições GET para a rota /posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts",postarNovoPost )
    app.post("/upload", upload.single("imagem"), uploadImagem)
    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;