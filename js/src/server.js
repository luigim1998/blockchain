const express = require("express")
const server = express()

const {generate_wallet} = require("./pages")

const nunjucks = require("nunjucks")
//as páginas então em src/views
nunjucks.configure("src/views", {
	express: server,
	noCache: true
})

//Inicia a configuração do servidor
server
//receber os dados do req body
.use(express.urlencoded({ extended: true }))
//configura arquivos estásticos (os que estão na pasta "public" passada no argumento)
.use(express.static("public"))
//rotas da aplicação
.get("/wallet/new", generate_wallet)
.listen(5500)