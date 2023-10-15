import * as fs from 'fs';
import {Autor} from './autor';

export class Post{
    private id: number;
    private texto: string;
    private autor: Autor;
    private data: string;
    private quantidadeDeLikes: number;
    
    constructor(id: number, texto: string, autor: Autor, data: string, quantidadeDeLikes: number){
        this.id = id;
        this.texto = texto;
        this.autor = autor,
        this.data = data;
        this.quantidadeDeLikes = quantidadeDeLikes;
    }

    getId(){
        return this.id;
    }

    getTexto(){
        return this.texto;
    }

    getAutor(){
        return this.autor;
    }

    getData(){
        return this.data;
    }

    getQuantidadeDeLikes(){
        return this.quantidadeDeLikes;
    }
}

export class RepositorioPosts{
    private filePath: string;

    constructor(filePath: string){
        this.filePath = filePath;
    }

    salvarEmArquivo(post: Post): void {
        try{
            const dadosAEscrever = 
            `Id: ${post.getId()}
            Texto: ${post.getTexto()}
            Autor: ${post.getAutor()}
            Data: ${post.getData()}
            Quantidade de Likes: ${post.getQuantidadeDeLikes()}`

            fs.writeFileSync(this.filePath, dadosAEscrever);
        } catch(error){
            console.error('Erro ao salvar o post: ', error);
        }
    }


    lerDeUmArquivo(): string {
        try {
            return fs.readFileSync(this.filePath, 'utf-8');
        } catch (error){
            console.error('Erro ao ler arquivo: ', error);
            return '';
        }
    }
}

//teste (ainda estou aprendendo o jest)
const autor = new Autor(1, 'Autor Teste', 'autor@teste.com');
const post = new Post(1, 'Conteúdo do post', autor, '11-11-1111', 12);
const repositorio = new RepositorioPosts('post.txt');

// Salvando o post em arquivo
repositorio.salvarEmArquivo(post);
console.log('Post salvo em arquivo.');

// Lendo o post do arquivo e exibindo na tela
const postSalvo = repositorio.lerDeUmArquivo();
console.log('Post lido do arquivo:');
console.log(postSalvo);