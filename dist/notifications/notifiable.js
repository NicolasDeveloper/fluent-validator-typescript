"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linqts_1 = require("linqts");
class Notifiable {
    constructor() {
        this.invalid = () => this._notifications.Any() || this.getNotificationsFromValidations().Any();
        this.valid = () => !this.invalid;
        this.validations = () => null;
        this.getNotificationsFromValidations = () => this.validations() || new linqts_1.List();
        this._notifications = new linqts_1.List();
    }
    addNotification(item) {
        this._notifications.Add(item);
    }
    addNotifications(items) {
        this._notifications.AddRange(items.ToArray());
    }
    get notifications() {
        return new linqts_1.List(this._notifications.ToArray()).Concat(this.getNotificationsFromValidations()).ToList();
    }
}
exports.Notifiable = Notifiable;
