"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notification {
    constructor(property, message) {
        this._property = property;
        this._message = message;
    }
    get property() {
        return this._property;
    }
    get message() {
        return this._message;
    }
}
exports.Notification = Notification;
