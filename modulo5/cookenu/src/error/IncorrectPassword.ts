import { BaseError } from "./BaseError";

export class InvalidCredential extends BaseError{
    constructor(){
        super("Invalid credentials",401)
    }
}