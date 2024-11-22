import express from "express";
import listarPosts from "../controller/postController.js";

const routes = (app) => {

    // **Habilita o middleware para analisar o corpo das requisições JSON**
    // Isso permite que a aplicação receba e processe dados em formato JSON
    app.use(express.json());
    // **Rota para listar todos os posts**
    // Responde a requisições GET para a rota /posts
    app.get("/posts", listarPosts);
}

export default routes;