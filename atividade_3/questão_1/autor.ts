export class Autor{
    private id: number;
    private nome: string;
    private email: string;

    constructor(id: number, nome: string, email: string){
        this.id =  id;
        this.nome = nome;
        this.email = email;
    }

    getId(){
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    getEmail(){
        return this.email;
    }
}