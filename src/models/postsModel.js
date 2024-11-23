import conectarAoBanco from "../config/dbConfig.js";

// **Conecta ao banco de dados MongoDB**
// Utiliza a string de conexão obtida da variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// **Função assíncrona para obter todos os posts do banco de dados**
export async function getTodosPosts() {
    // Seleciona o banco de dados e a coleção de posts
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");

    // Executa uma consulta para encontrar todos os documentos na coleção
    // e retorna os resultados como um array
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
} 

