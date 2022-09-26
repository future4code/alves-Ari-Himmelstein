
import { calcAge, calcAverage, checkIfEven, formatDate, getLength, IUser, randomNumberBetween1And10, toNumber, 
        toSplit, toUpperCase, users } from "./exercicios"


// Exercicio 0
describe("Testando a checkIfEven", () => {
    test("A entrada 10 deve retornar true", () => {
        const input = 10
        const output = checkIfEven(input)

        expect(output).toBe(true)
    })
})

// Exercício 1

describe("Testando a toUpperCase", () => {
    test("A entrada de coco deve retornar COCO", () =>{
        const input = "coco"
        const output = toUpperCase(input)

        expect(output).toBe("COCO")
    })
})

// Exercício 2

describe("Testando a toSplit", () => {
    test("A entrada de coco deve retornar ", () =>{
        const input = "coco"
        const output = toSplit(input)

                expect(output).toEqual(["c","o","c","o"])
    })
})


// Exercicio 3

describe("Testando a toNumber", () => {
    test("A entrada de 50 (string)  deve retornar 50 (numero)", () =>{
        const input = "50"
        const output = toNumber(input)

        expect(output).toBe(50)
    })
})

// Exercicio 4

describe("Testando a getLength", () => {
    test("A entrada de coco(string)  deve retornar 4 (numero)", () =>{
        const input = "coco"
        const output = getLength(input)

        expect(output).toBe(4)
    })
})


// Exercicio 5

describe("Testando a calcAge", () => {
    test("Deve retornar um numero entre 1 e 10", () =>{
       
        const output = randomNumberBetween1And10()

        expect(output).toBeGreaterThanOrEqual(0.10)
    })
})

//Exercicio 6

describe("Testando se o usuario está na lista", () => {
    test("O Astrodev deve estar na lista de usuários", () => {

        const user: IUser = {
            id: "3",
            name: "Astrodev",
            age: 50
        }

        expect(users).toContainEqual(user)
    })
})

//Exercicio 7

describe("Testando a media arredondada para cima", () => {
    test("a media deve retornar 7", () => {

        const list: number[] = [10,4,7,6]
        const average = calcAverage(list)

        expect(average).toBe(7)
    })
})

//Exercicio 8

describe("Testando a calcAge", () => {
    test("deve retornar idade de 61", () => {

        const year: number = 1961
        const age = calcAge(year)

        expect(age).toBe(61)
    })
})

//Exercicio 9

describe("Testando a formaDate", () => {
    test("deve retornar 26/09/2022", () => {

        const initialDate: string = "2022/09/26"
        const  dataForma = formatDate(initialDate)

        expect(dataForma).toEqual("26/09/2022")
    })
})
