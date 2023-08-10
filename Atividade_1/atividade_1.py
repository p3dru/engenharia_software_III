class Endereco:
    def __init__(self, rua, cidade, estado):
        self.__rua = rua
        self.__cidade = cidade
        self.__estado = estado

    def get_endereco(self):
        return f"{self.__rua}, {self.__cidade}, {self.__estado}"

class Pessoa:
    def __init__(self, nome, idade):
        self.__nome = nome
        self.__idade = idade
        self.__enderecos = []

    def adicionar_endereco(self, endereco):
        self.__enderecos.append(endereco)

    def listar_enderecos(self):
        for endereco in self.__enderecos:
            print(endereco.get_endereco())

class Cliente(Pessoa):
    def __init__(self, nome, idade, cpf):
        super().__init__(nome, idade)
        self.__cpf = cpf
    
class Funcionario(Pessoa):
    def __init__(self, nome, idade, salario):
        super().__init__(nome, idade)
        self.__salario = salario

    def mostrar_salario(self):
        return f"Salário de {self._Pessoa__nome} = R${self.__salario:.2f}"
    
class Loja:
    def __init__(self, nome):
        self.__nome = nome
        self.__funcionarios = []

    def contratar_funcionarios(self, funcionario):
        self.__funcionarios.append(funcionario)
    
    def listar_funcionarios(self):
        for funcionario in self.__funcionarios:
            print(f"Nome do funcionário: {funcionario._Pessoa__nome}/nSalário: {funcionario.mostrar_salario()}")

endereco1 = Endereco("123 Rua Principal", "Cidade A", "Estado X")
endereco2 = Endereco("456 Rua Secundária", "Cidade B", "Estado Y")
endereco3 = Endereco("789 Rua Terciária", "Cidade C", "Estado Z")

cliente = Cliente("Alice", 30, "123456789")
funcionario1 = Funcionario("Bob", 25, 3500.00)
funcionario2 = Funcionario("Carol", 28, 4500.00)

cliente.adicionar_endereco(endereco1)
funcionario1.adicionar_endereco(endereco2)
funcionario2.adicionar_endereco(endereco3)

loja = Loja("Minha Loja")
loja.contratar_funcionarios(funcionario1)
loja.contratar_funcionarios(funcionario2)

print(f"Endereços de {cliente._Pessoa__nome}:")
cliente.listar_enderecos()

print(f"Funcionários da loja {loja._Loja__nome}:")
loja.listar_funcionarios()

#parte do código foi pesquisado via chat gpt, porém os conceitos e as aplicações foram entendidas
