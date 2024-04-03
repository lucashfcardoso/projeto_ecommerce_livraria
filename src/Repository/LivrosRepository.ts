import { Livros } from "../Model/Livros";


export interface LivrosRepository { 
   
    listarTodas(): void;
    listarPorId(id: number): void;
    cadastrar(livros: Livros): void;
    atualizar(livros: Livros): void;
    deletar(id: number): void;

}