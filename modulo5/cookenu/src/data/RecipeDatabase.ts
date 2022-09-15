import { Recipe } from "../model/Recipe"
import { BaseDatabase } from "./BaseDatabase"

export class RecipeDatabase extends BaseDatabase {

    private static TABLE_NAME = "cookenu_recipe"

    insertRecipe = async (recipe: Recipe): Promise<void> => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    created_at: recipe.getCreatedAt(),
                    creator_userId: recipe.getCreatorUserId()
                })
                .into(RecipeDatabase.TABLE_NAME)
                

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getRecipeById = async (id: string): Promise<Recipe | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(RecipeDatabase.TABLE_NAME)
                .where({ id })

            return result[0] && Recipe.toRecipeModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    
}