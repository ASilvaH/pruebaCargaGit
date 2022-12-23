class Usuario:

    nombre_banco = 'Metropolis'

    # Métodos de instancia
    # Constructor
    def __init__(self, name, surname, email, balance):
        self.name = name
        self.surname = surname
        self.email = email
        self.balance = CuentaBancaria(1.02, 0)

    def saludo(self):
        print('Hello, my name is', self.name)
        return self

    # def hacerDeposito(self, amount):
    #     self.balance += amount
    #     return self

    # def hacer_retiro(self, amount):
    #     self.balance -= amount
    #     return self

    # def mostrar_balance_usuario(self):
    #     print('La cuenta es de', self.name, self.surname,
    #           'y el total es de', self.balance)
    #     return self

    # Métodos de clase

    @classmethod
    def cambiar_nombre_banco(cls, name):
        cls.nombre_banco = name

    @classmethod
    def mostrar_nombre_banco(cls):
        print('El nombre del banco es', cls.nombre_banco)

    # Método estático: se usa para ordenar código, no cumple ninguna función en especial

    @staticmethod
    def puede_retirar(balance, amount):
        if (balance - amount) < 0:
            return False
        else:
            return True


class CuentaBancaria(Usuario):

    # Constructor
    def __init__(self, tasa_interés, balance):
        self.tasa = tasa_interés
        self.balance = balance
        return self

    def depósito(self, amount):
        self.balance += amount
        return self

    def retiro(self, amount):
        self.balance -= amount
        return self

    def mostrar_info_cuenta(self):
        print('La cuenta es de', self.name, self.surname,
              'y el total es de', self.balance)
        return self

    def generar_interés(self):
        self.balance *= self.tasa
        return self


# Para llamar a un método de clase, lo llamamos con el nombre de la clase
Usuario.cambiar_nombre_banco('Banco Anillos')
Usuario.mostrar_nombre_banco()

# Acá creamos instancias nuevas de la clase Usuario
Alejandra = Usuario('Alejandra', 'Silva', 'asilva@mimail.com')
Rodrigo = Usuario('Rodrigo', 'Candia', 'rcandia@mimail.com')
Carolina = Usuario('Carolina', 'Araya', 'caraya@mimail.com')


# Para llamar a un método de instancia, lo llamamos con el nombre de la instancia
# Alejandra.saludo()

# # Para encadenar, cada método debe retornar self

# Alejandra.saludo().hacerDeposito(1000000).hacer_retiro(
#     10000).mostrar_balance_usuario()
# Rodrigo.saludo().hacerDeposito(600000).hacer_retiro(6000).mostrar_balance_usuario()
# Carolina.saludo().hacerDeposito(500000).hacer_retiro(
#     50000).mostrar_balance_usuario()
