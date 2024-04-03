import { Livros } from "../Model/Livros";
import { LivrosRepository } from "../Repository/LivrosRepository";


export class LivrosController implements LivrosRepository{

    private listaLivros: Array<Livros> = new Array<Livros>();

    public id: number = 0;

    listarPorId(id: number): void {
        let buscarLivros = this.buscarNoArray(id);
        if(buscarLivros !== null)
            buscarLivros.visualizar()
        else 
            console.log("\nLivro não foi encontrado!")
    }

    listarTodas(): void {                       
        for (let livros of this.listaLivros){   
            livros.visualizar();
        }
    }

    cadastrar(livros: Livros): void {
        this.listaLivros.push(livros);
        console.log("O Livro foi adicionado")
    }

    atualizar(livros: Livros): void {
        let buscarLivros = this.buscarNoArray(livros.id);

        if(buscarLivros !== null){
            this.listaLivros[this.listaLivros.indexOf(buscarLivros)] = livros
            console.log(`O livro ${livros.id} foi atualizado com sucesso!`)
         } else 
            console.log("\nLivro não foi encontrada!")
    }

    deletar(id: number): void {
        let buscarLivros = this.buscarNoArray(id);
        if(buscarLivros !== null){
            this.listaLivros.splice(this.listaLivros.indexOf(buscarLivros),1)
            console.log(`O livro ${id} foi excluido com sucesso!`)
         } else 
            console.log("\nLivro não foi encontrado!")
        }

    public gerarId(): number {
        return ++ this.id
    }

    public buscarNoArray(id: number): Livros | null {
        for (let livros of this.listaLivros){
            if (livros.id === this.id)    
            return livros;
        }
        return null;                        
    }
}
