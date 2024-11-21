import express from "express";

// Array de Objetos.
const posts = [
    {
      id:1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id:2,
      descricao: "Gato curioso olhando pela janela",
      imagem: "https://placekitten.com/400/200"
    },
    {
      id:3,
      descricao: "Gatinho dormindo em uma caixa",
      imagem: "https://placekitten.com/200/300"
    },
    {
      id:4,
      descricao: "Dois gatos brincando com um novelo de lã",
      imagem: "https://placekitten.com/500/300"
    },
    {
      id:5,
      descricao: "Gato preto em uma noite de lua cheia",
      imagem: "https://placekitten.com/300/200"
    },
    {
      id:6,
      descricao: "Gatinho ronronando no colo",
      imagem: "https://placekitten.com/200/200"
    },
    {
      id:7,
      descricao: "Gato explorando a natureza",
      imagem: "https://placekitten.com/400/300"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando.");

});


app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});


function buscarPostPorID(id){
    return posts.findIndex((post)=> {
        return post.id== Number(id);
    })
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});