

// Exercício 0
export const checkIfEven = (n: number): boolean => {
    if (n % 2 == 0) {
        return true
    }

    return false
}

// Exercicio 1 

export const toUpperCase = (str: string): string => {
	return str.toUpperCase()
}

// Exercicio 2

export const toSplit = (str: string): string[] => {
	return str.split("")
}

// Exercicio 3

export const toNumber = (str: string): number => {
	return Number(str)
}

// Exercicio 4

export const getLength = (str: string): number => {
	return str.length
}

// Exercicio 5

export const randomNumberBetween1And10 = (): number => {
    const min = 1
    const max = 10
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return result
}

// Exercicio 6

export interface IUser {
    id: string,
    name: string,
    age: number
}

export const users: IUser[] = [
    {
        id: "1",
        name: "Alice",
        age: 20
    },
    {
        id: "2",
        name: "Bob",
        age: 18
    },
    {
        id: "3",
        name: "Astrodev",
        age: 50
    }
]

// Exercicio 7

export const calcAverage = (list: number[]): number => {
    let totalSum = 0
    
    for (let n of list) {
        totalSum += n
    }

    const average = Math.ceil(totalSum / list.length)

    return average
}

// Exercicio 8

export const calcAge = (year: number): number => {
    const currentYear = new Date().getFullYear()
    const age = currentYear - year
    
    return age
}

// Exercicio 9

export const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
		const formattedDate = date.toLocaleDateString()

    return formattedDate 
}