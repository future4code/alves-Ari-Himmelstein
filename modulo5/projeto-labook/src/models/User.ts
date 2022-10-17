export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}



export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getEmail = () => {
        return this.email
    }

    public getPassword = () => {
        return this.password
    }

    public getRole = () => {
        return this.role
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setPassword = (newPassword: string) => {
        this.password = newPassword
    }

    public setRole = (newRole: USER_ROLES) => {
        this.role = newRole
    }

    static toUserModel(user: any): User {
        return new User(
            user.id,
            user.name,
            user.email,
            user.password,
            user.role
        )
    }

   
  
}

export interface SignupInputDTO {
    name: string
    email: string
    password: string
}

export interface LoginInputDTO  {
    email: string
    password: string
}