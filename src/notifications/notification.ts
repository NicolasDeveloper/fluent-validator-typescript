export class Notification {
    
    private _property: string;
    private _message: string;

    constructor(property: string, message: string) {
        this._property = property;
        this._message = message;
    }

    get property(): string {
        return this._property;
    }

    get message(): string {
        return this._message;
    }

}