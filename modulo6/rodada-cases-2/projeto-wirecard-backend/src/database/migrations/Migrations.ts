import { BaseDatabase } from "../BaseDatabase"
import { BuyerDatabase } from "../BuyerDatabase"
import { PaymentDatabase } from "../PaymentDatabase"


class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${PaymentDatabase.TABLE_PAYMENTS};
        DROP TABLE IF EXISTS ${BuyerDatabase.TABLE_BUYERS};
        DROP TABLE IF EXISTS ${BuyerDatabase.TABLE_CLIENTS};
      
       
        CREATE TABLE IF NOT EXISTS ${BuyerDatabase.TABLE_CLIENTS} (
            id VARCHAR(255) PRIMARY KEY
            );
            
        CREATE TABLE IF NOT EXISTS ${BuyerDatabase.TABLE_BUYERS} (
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            cpf VARCHAR(255) PRIMARY KEY
        );
        
        CREATE TABLE IF NOT EXISTS ${PaymentDatabase.TABLE_PAYMENTS} (
            id VARCHAR(255) PRIMARY KEY,
            amount DECIMAL(4,2) NOT NULL,
            type ENUM("CREDIT_CARD", "BOLETO") NOT NULL,
            status ENUM("CREDIT_CARD", "BOLETO") NOT NULL,
            card_holder_name VARCHAR (255),
            card_number VARCHAR(255),
            card_expiration_date DATE,
            card_cvv VARCHAR(255),
            boleto_number VARCHAR(255),
            client_id VARCHAR(255) NOT NULL,
            buyer_cpf VARCHAR(255) NOT NULL,
            FOREIGN KEY (client_id) REFERENCES ${BuyerDatabase.TABLE_CLIENTS}(id),
            FOREIGN KEY (buyer_cpf) REFERENCES ${BuyerDatabase.TABLE_BUYERS}(cpf)
        );
        
        `)
    }

    insertData = async () => {
        // await BaseDatabase
        //     .connection(UserDatabase.TABLE_USERS)
        //     .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()