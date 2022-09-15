import { Request, Response } from "express"
import moment, { now } from "moment"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { Recipe } from "../model/Recipe"
import { USER_ROLES } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class RecipeController {
    createRecipe = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const { title, description } = req.body

            if (!title || !description) {
                res.statusCode = 400
                throw new Error("Please provide title and description")
            }

            if (!token) {
                res.statusCode = 401
                throw new Error("Please provide a token")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)

            if (!authenticationData) {
                res.statusCode = 401
                throw new Error("Invalid token")
            }

            const id = new IdGenerator().generate()

            const newRecipe = new Recipe(
                id,
                title,
                description,
                new Date(),
                authenticationData.id
            )

            const recipeDB = new RecipeDatabase()
            await recipeDB.insertRecipe(newRecipe)

            res.status(201).send({
                message: "Recipe created successfully",
                id
            })
            
        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getRecipeById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error("Please provide a token")
            }

            if (!id || id === ":id") {
                res.statusCode = 400
                throw new Error("Please provide an id")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)

            if (!authenticationData) {
                res.statusCode = 401
                throw new Error("Invalid token")
            }

            const recipeDB = new RecipeDatabase()
            const recipe = await recipeDB.getRecipeById(id)

            if (!recipe) {
                res.statusCode = 404
                throw new Error("Recipe not found")
            }

            recipe.setData(
                moment(recipe.getCreatedAt(), "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY")
            )

            res.status(200).send({recipe})

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    
}