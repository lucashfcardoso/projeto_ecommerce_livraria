import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { LivrosController } from "./src/Controller/LivrosController";
import { Novos } from "./src/Model/Novos";
import { Usados } from "./src/Model/Usados";

export function main() {

    let opcao, id, tipo, preco: number;
    let nome, genero, avaria: string;
    let tipoLivros = ['Novos', 'Usados']

    const livrosController: LivrosController = new LivrosController();

    

    while (true) {

        console.log(colors.bg.black, colors.fg.cyan, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                LIVRARIA SAO PAULO                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar todos os Produtos             ");
        console.log("            2 - Listar Produto pelo ID               ");
        console.log("            3 - Cadastrar Produto                    ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.cyanstrong, 
                "\nLivraria Sao Paulo - As Paginas da sua Vida ");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", colors.reset);
                livrosController.listarTodas();
                keyPress()
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar Produto pelo ID\n\n", colors.reset);
                id = readlinesync.questionInt("Digite o Id do Livro: ");
                livrosController.listarPorId(id);
                keyPress()
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", colors.reset);
                    nome = readlinesync.question("Digite o nome do livro: ");
                    tipo = readlinesync.keyInSelect(tipoLivros, "", {cancel:false}) + 1 
                    preco = readlinesync.questionFloat("Digite o preco: ");

                    switch(tipo){
                        case 1:
                            genero = readlinesync.question("Digite o genero do livro: ");
                            livrosController.cadastrar(new Novos (livrosController.gerarId(), nome, tipo, preco, genero));
                        break;

                        case 2:
                            avaria = readlinesync.question("Informe se o livro possui avaria: ");
                            livrosController.cadastrar(new Usados (livrosController.gerarId(), nome, tipo, preco, avaria));
                        break;
                    }
                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Produto\n\n", colors.reset);
                id = readlinesync.questionInt("Digite o Id do Livro: ");
                let livros = livrosController.buscarNoArray(id);
                if (livros !== null) {
                    nome = readlinesync.question("Digite o nome do livro: ");
                    tipo = livros.tipo
                    preco = readlinesync.questionFloat("Digite o preco: ");

                    switch(tipo){
                        case 1:
                            genero = readlinesync.question("Digite o genero do livro: ");
                            livrosController.cadastrar(new Novos (id, nome, tipo, preco, genero));
                        break;

                        case 2:
                            avaria = readlinesync.question("Informe se o livro possui avaria: ");
                            livrosController.cadastrar(new Usados (id, nome, tipo, preco, avaria));
                        break;
                    }
                } else 
                console.log("Livro nao encontrado!")

                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\n\nDeletar Produto\n\n", colors.reset);
                id = readlinesync.questionInt("Digite o Id do Livro: ");
                livrosController.deletar(id);
                keyPress()
                break;

            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Lucas Henrique");
    console.log("Lucas Henrique - lucashfcardoso@gmail.com");
    console.log("github.com/https://github.com/lucashfcardoso");
    console.log("*****************************************************");
}


function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();