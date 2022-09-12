# Introdução a Autenticação

## Exercicios

### Link da Documentação

#### [Pokemons-RedFox-API](https://documenter.getpostman.com/view/16817790/UVC3kTiC)

##

### Exercicio 1
a) Acho que a utilização de strings aumenta as possibilidades de utilização de ids, no entanto seria mais eficiente a utilização de numeros.
b)
 import { v4 } from "uuid";

    export function generateId(): string {
        return v4();
    }

### Exercicio 2
a) O codigo representa a criação de um usuário na tabela de usuarios no banco de dados através da passagem dos parametros correspondentes e da connection do KNEX e e comandos correspondentes.
b)
    CREATE TABLE User (
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

c) 
    import knex from "knex";


    const connection = knex({
        client: "mysql",
        connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
        },
    });

        const userTableName = "User";

        const createUser = async (
            id: string, 
            email: string, 
            password: string) => {
        await connection
            .insert({
            id,
            email,
            password,
            })
            .into(userTableName);
        };

### Exercicio 3
a) Porque assim garantimos que a chave secreta que está no .env seja uma string, porque é isso o esperado para gerar o token.
b)
    import * as jwt from "jsonwebtoken";

    const expiresIn = "1min";
    const generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
        {
            id: input.id,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
        );
        return token;
    }
    }

    type AuthenticationData = {
    id: string;
    }

##### Endpoints GET(getAllokemons, getAllPokemonsByName), POST(addNewPokemons)

### O que Não Funciona

##### Endpoints GET(getAllPokemonsAndSort, getAllPokemonsSortAndLimitByFive)

##

### Autor 
#### [Erlan Carvalho](https://github.com/Carvalho001)
