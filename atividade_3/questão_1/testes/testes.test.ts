import { Autor } from '../autor';
import { Post, RepositorioPosts } from '../post';

describe('Author', () => {
  it('Deve criar um autor com os atributos corretos', () => {
    const autor = new Autor(1, 'Autor Teste', 'autor@teste.com');
    expect(autor.getId()).toBe(1);
    expect(autor.getNome()).toBe('Autor Teste');
    expect(autor.getEmail()).toBe('autor@teste.com');
  });
});

describe('RepositorioDePosts', () => {
  let repositorio;
  const filePath = 'test_post.txt';

  beforeEach(() => {
    repositorio = new RepositorioPosts(filePath);
  });

  it('Deve salvar e ler um post em arquivo', () => {
    const autor = new Autor(1, 'Autor Teste', 'autor@teste.com');
    const post = new Post(1, 'Conteúdo do post', autor, '12-11-2000', 12);

    // Salvando o post em arquivo
    repositorio.saveToFile(post);

    // Lendo o post do arquivo
    const postSalvo = repositorio.readFromFile();

    expect(postSalvo).toContain('ID: 1');
    expect(postSalvo).toContain('Texto: Conteúdo do post');
    expect(postSalvo).toContain('Autor: Autor Teste');
    expect(postSalvo).toContain('Quantidade de Likes: 0');
  });
});
