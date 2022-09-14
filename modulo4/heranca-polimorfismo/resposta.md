
Herança

- Exercício 1
    a) Não é possível imprimir a password pois esse atributo é privado e não é possível acessá-lo fora da classe.
    b) A mensagem do console aparece apenas uma vez, qdo o contrutor é acionado.

- Exercício 2
    a) A mensagem  é impressa apenas uma vez.
    b) A mensagem  é impressa apenas uma vez, pois a classe User é herdada por Customer e o construtor da classe User é    chamado primeiro.

- Exercício 3
    a) Não é possível imprimir a  password pois ela é privada e não é possível acessá-la fora da classe.
   

- Exercício 4
    a) A mensagem  é impressa apenas uma vez.
    b) A mensagem  é impressa apenas uma vez, pois a classe User é herdada por Customer e o construtor da classe User é    chamado primeiro.

- Exercício 9
    a) Não é possível acessar o atributo salesQuantity pois ele é privado.
    
- Exercício 10
    a) Foi impresso o valor de baseSalary + 400 + (salesQuantity * 5), pois o método calculateTotalSalary foi sobrescrito na classe Seller.
   

Polimorfismo

- Exercício 2
    a) A classe Place é abstrata, pois não pode ser instanciada.
    b) para criar uma instância dessa classe precisamos declarar uma classe filha e criar sua instância .

- Exercício 4
    a)  A classe ResidentialClient é filha de Residence, pois ela herda todos os atributos e métodos da classe Residence.

- Exercício 5
    a)  A classe IndustrialClient é filha de Industry, pois ela herda todos os atributos e métodos da classe Industry. 
      E a classe IndustrialClient herda o atributo machinesQuantity, pois é uma indústria.
    b)A classe IndustrialClient implementa a interface Client, porque ela herda todos os atributos e métodos da interface Client.
    c)Porque só queremos receber os dados e informações de um cliente.


   

- Exercício 6
    a) a classe CommercialClient herda todos os atributos e métodos da classe Commerce, 
     e a classe ResidentialClient herda todos os atributos e métodos da classe Residence. 
      E ambas as classes são implementadas por uma interface Client.
    b) A diferença entre a classe CommercialClient e a classe ResidentialClient é que a 
     classe CommercialClient herda o atributo floorsQuantity, pois é um comércio.
   


  
  