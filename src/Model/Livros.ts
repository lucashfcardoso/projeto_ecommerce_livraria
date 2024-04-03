export abstract class Livros {

    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;



	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}
	

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter preco
     * @return {number}
     */
	public get preco(): number {
		return this._preco;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter preco
     * @param {number} value
     */
	public set preco(value: number) {
		this._preco = value;
	}


    public visualizar(): void{

        let tipo: string = "";

        switch(this._tipo) {
            case 1:
                tipo = "Novos"
            break;

            case 2:
                tipo = "Usados"
            break;
        }

        console.log("*************************************")
        console.log(`              Livros                 `)
        console.log("*************************************")
        console.log(`Id do Livro: ${this._id}`)
        console.log(`Nome do Livro: ${this._nome}`)
        console.log(`Tipo do Livro: ${tipo}`)
        console.log(`Preço do Livro: ${this._preco}`)
    }

}