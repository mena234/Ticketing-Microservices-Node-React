
export class DatabaseConnectionError extends Error{
    reason = 'Error Connecting To Database';
    constructor() {
        super()
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)

    }
}