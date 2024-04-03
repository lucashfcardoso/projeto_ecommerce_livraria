import { Livros } from "./Livros";

export class Novos extends Livros {

    private _genero: string;


	constructor(id: number, nome: string, tipo: number, preco: number, genero: string) {
        super (id, nome, tipo, preco)
		this._genero = genero;
	}


    /**
     * Getter genero
     * @return {string}
     */
	public get genero(): string {
		return this._genero;
	}

    /**
     * Setter genero
     * @param {string} value
     */
	public set genero(value: string) {
		this._genero = value;
	}

    public visualizar(): void {
        super.visualizar()
        console.log(`Gênero: ${this._genero}`)
    }

}