import { Livros } from "./Livros";

export class Usados extends Livros {

    private _avaria: string;


	constructor(id: number, nome: string, tipo: number, preco: number, avaria: string) {
        super (id, nome, tipo, preco)
		this._avaria = avaria;
	}


    /**
     * Getter avaria
     * @return {string}
     */
	public get avaria(): string {
		return this._avaria;
	}

    /**
     * Setter avaria
     * @param {string} value
     */
	public set avaria(value: string) {
		this._avaria = value;
	}
    

    public visualizar(): void {
        super.visualizar()
        console.log(`Possui avaria? ${this._avaria}`)
    }

}