import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Missing values",404)
    }
}