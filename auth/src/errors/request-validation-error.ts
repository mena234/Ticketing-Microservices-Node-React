import { ValidationError } from "express-validator";

interface CustomError {
    statusCode: number;
    serializeErrors(): {
        message: string,
        field?: string
    }
}

export class RequestValidationError extends Error implements CustomError {
    statusCode: number;
    constructor(public errors: ValidationError[]) {
        super();
        // only because we extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    
    serializeErrors(): { message: string; field?: string | undefined; } {
        throw new Error("Method not implemented.");
    }


}
