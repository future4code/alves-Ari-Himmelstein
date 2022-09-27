import { BaseError } from "./BaseError";

export class AuthorizationError extends BaseError {
    constructor(
        message: string  
    ) {
        super(403, message)
    }
}