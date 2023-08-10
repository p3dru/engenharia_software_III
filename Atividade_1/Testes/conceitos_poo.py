#conceito 1: classe e objeto
"""
A classe cria o "molde", enquanto o objeto é a intanciação do molde,
é o que foi criado com o molde. O objeto propriamente dito
"""
class Animal:
    #é o molde
    def __init__(self, nome, especie):
        #init é o construtor
        self.nome = nome
        self.especie = especie
        #self é a referência ao objeto atual
    
    def fazer_barulho(self):
        #um método/comportamento da classe
        pass

#conceito 2: herança
"""
Aqui é onde uma outra classe herde os atributos e métodos de uma
outra classe pai (no caso "Animal" é o pai)
"""

class Mamifero(Animal):
    def __init__(self, nome, especie, pelos):
        super().__init__(nome, especie)
        """
        super chama o construtor da classe pai (especificada entre
        parêntesis) para inicializar os atributos herdados
        """
        self.pelos = pelos

    def amamentar(self):
        pass

class Ave(Animal):
    def __init__(self, nome, especie, asas):
        super().__init__(nome, especie)
        self.asas = asas
    
    def voar(self):
        pass

#conceito 3: polimorfismo
"""
Permite que vários objetos sejam tratados como objetos de uma classe
comum. É como se cada objeto criado pelo molde (classe pai) tivesse
uma função comum entre todos eles, independente se cada classe tenha
mais atributos. Contanto que sejam feitos no mesmo molde, vão
compartilhar de características (atributos) e comportamentos (métodos)
criados a classe pai
"""
class Gato(Mamifero):
    def fazer_barulho(self):
        return "Miau!"

class Cachorro(Mamifero):
    def fazer_barulho(self):
        return "Au au!"

class Pato(Ave):
    def fazer_barulho(self):
        return "Quack!"

"""
fazer barulho é um método comum à todos, já que todos foram criados
com a mesma classe pai (Animal)
"""

    
#conceito 4: encapsulamento

"""
Controla o acesso aos atributos e métodos. É uma segurança para que
apenas métodos específicos possam acessar e modificar essa classe
"""
class AnimalEncapsulado:
    def __init__(self, nome, especie):
        self.__nome = nome
        self.__especie = especie
    
    def get_nome(self):
        return self.__nome
    
    def set_nome(self, novo_nome):
        self.__nome = novo_nome

"""
Os atributos __nome e __especie são privados e só podem ser acessados
usando os métodos "get_nome" e "__set_nome"
"""


#conceito 5: metodos especiais
"""
Permitem que possamos definir o comportamentos especial de uma classe,
são "palavras mágicas" dentro do python
"""
class AnimalEspecial:
    def __init__(self, nome, especie):
        self.nome = nome
        self.especie = especie
    
    def __str__(self):
        return f'{self.nome} ({self.especie})'
    
    """
    __str__ no caso serve para mostrarmos informações mais legíveis
    sobre o objeto em questão
    """
    
if __name__ == "__main__":
    """
    a linha acima serve para especificar que o código abaixo (identado)
    nela, só irá executar caso o script seja executado diretamente pelo
    usuário (em um prompt por exemplo), e não quando ele for importado
    em outro código
    """
    gato = Gato("Melissa", "Felino", True)
    cachorro = Cachorro("Doug", "Canino", True)
    pato = Pato("Donald", "Ave", True)

    animais = [gato, cachorro, pato]

    for animal in animais:
        print(f'{animal.nome} faz: {animal.fazer_barulho()}')
        #todo método (comportamento), deve ser chamado com "()" ao final
        #ex -> classe.metodo() -> animal.fazer_barulho()
    
    animal_encapsulado = AnimalEncapsulado("Encapsulado", "Misterioso")
    print(animal_encapsulado.get_nome())
    animal_encapsulado.set_nome("Marleidson")
    print(animal_encapsulado.get_nome())
    print(animal_encapsulado)

    animal_especial = AnimalEspecial("Especial", "Exótico")
    print(animal_especial)
