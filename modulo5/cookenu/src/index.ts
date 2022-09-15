import { app } from "./app";
import { RecipeController } from "./endpoints/RecipeController";
import { UserController } from "./endpoints/UserController";


const userController = new UserController()
const recipeController = new RecipeController()


// Users
app.post('/signup', userController.signUp)
app.post('/login', userController.login)
app.get('/user/profile', userController.getProfileLogged)
app.get('/user/:id', userController.getProfileById)


// Recipes
app.get('/recipe/:id', recipeController.getRecipeById)
app.post('/recipe', recipeController.createRecipe)