import { Autor } from "../autor";
import { Post, RepositorioPosts } from "../post";

test('Deve salvar e ler um post em arquivo', () => {
    const autor = new Autor(1, 'Autor 1', 'teste@autor.com');
    const post = new Post(1, 'texto,texto', autor, '12-11-2000', 12);

    const filePath = 'teste_post.txt';
    const repositorio = new RepositorioPosts(filePath);

    repositorio.salvarEmArquivo(post);

    const postSalvo = repositorio.lerDeUmArquivo();

    expect(postSalvo).toContain('ID: 1');
    expect(postSalvo).toContain('Texto: texto,texto');
    expect(postSalvo).toContain(autor);
    expect(postSalvo).toContain('12-11-2000');
    expect(postSalvo).toContain(12);
});