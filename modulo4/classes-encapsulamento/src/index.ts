// Exercicio 1
// a) Construtores são basicamente funções de inicialização de uma classe, 
// as quais são invocadas no momento em que objetos desta classe são criadas. 

// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }
    
//   }

//   const user: UserAccount = new UserAccount ("202.202.202-22", "Jonas", 30)
//   console.log(user)

 //b) Ao executar a chamada, foi impresso uma única vez a mensagem "Chamando o construtor da classe User"
 //c) Para acessar informações privadas é necessário que se crie métodos de classe
 //   do tipo públicos que chamem as informações necessárias.

 // Exercicio 2
 class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value
        this.date = date
    }
    public getDescription(): string {
        return this.description
    }

    public getValue(): number {
        return this.value
    }

    public getDate(): string {
        return this.date
    }
 }

 class UserAccount {
    private cpf: string
    private name: string
    private age: number
    private balance: number = 1000
    private transactions: Transaction[] = []

    constructor(
        cpf: string,
        name: string,
        age: number
    ) {
        this.cpf = cpf
        this.name = name
        this.age = age
    };

    public getCpf(): string {
        return this.cpf
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

    public getBalance(): number {
        return this.balance
    };

    public getTransactions(): Transaction[] {
        return this.transactions
    }

    public setBalance(newValue: number): void {
        this.balance += newValue
    }

    public setTransactions(newTransaction: Transaction): void {
        this.transactions = [...this.transactions, newTransaction]

        this.balance -= newTransaction.getValue()
    }
 }

const fulanoAccount = new UserAccount("101.202.303-45","fulano", 42)
const fulano1Transaction = new Transaction("Pagamento de Supermercad0", 120, "05/09/2023")


fulanoAccount.setTransactions(fulano1Transaction)

console.log(fulanoAccount)

// Exercicio 3

class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    };

    public getAccounts(): UserAccount[] {
        return this.accounts
    }

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount);
    }
}