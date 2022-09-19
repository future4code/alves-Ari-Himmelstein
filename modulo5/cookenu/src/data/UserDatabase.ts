
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    selectRecipesUserFeed(id: any) {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: string) {
        throw new Error("Method not implemented.");
    }

    private static TABLE_NAME = "cookenu_user"

    getUserByEmail = async (email: string): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select('*')
                .from(UserDatabase.TABLE_NAME)
                .where({ email })

            return result[0] && User.toUserModel(result[0])
            
        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }
    
    insertUser = async (user: User): Promise<void> => {
        try {
            await this.getConnection()
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                })
                .into(UserDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getUserById = async (id: string): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select('id', 'name', 'email', 'role')
                .from(UserDatabase.TABLE_NAME)
                .where({ id })

            return result[0] && User.toUserModel(result[0])
            
        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }

    insertFollow = async (userId: string, followedId: string): Promise<void> => {
        try {
            await this.getConnection()
                .insert({
                    follower_id: userId,
                    followed_id: followedId,
                })
                .into('cookenu_follower_connection')

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    deleteFollow = async (userId: string, userToUnfollowID: string): Promise<void> => {
        try {
            await this.getConnection()
                .delete()
                .from('cookenu_follower_connection')
                .where({
                    follower_id: userId,
                    followed_id: userToUnfollowID,
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getFollowers = async (userId: string): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select('*')
                .from('cookenu_follower_connection')
                .where({ follower_id: userId })

            return result
            
        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getFollowings = async (userId: string): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select('*')
                .from('cookenu_follower_connection')
                .where({ followed_id: userId })

            return result

        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }

  
}