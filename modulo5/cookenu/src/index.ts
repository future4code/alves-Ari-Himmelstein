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
app.get("/user/feed", userController.getRecipesFeed)

// Recipes
app.get('/recipe/:id', recipeController.getRecipeById)
app.post('/recipe', recipeController.createRecipe)
app.put('/recipe/:id', recipeController.editRecipe)
app.delete('/recipe/:id', recipeController.removeRecipe)


//Folowers
app.post('/user/follow', userController.followUser)
app.post('/user/unfollow', userController.unfollowUser)
