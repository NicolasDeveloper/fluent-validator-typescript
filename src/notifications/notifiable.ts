import { List } from "linqts";
import { Notification } from "./notification";


export class Notifiable {
    private _notifications: List<Notification>;

    constructor() {
        this._notifications = new List<Notification>();
    }

    get invalid(): boolean {
        return this._notifications.Any() || this.getNotificationsFromValidations().Any();
    }
    get valid(): boolean {
        return !this.invalid;
    }

    public addNotification(item: Notification) {
        this._notifications.Add(item);
    }

    public addNotifications(items: List<Notification>) {
        this._notifications.AddRange(items.ToArray());
    }
    
    get notifications(): List<Notification> {
        return new List<Notification>(this._notifications.ToArray()).Concat(this.getNotificationsFromValidations()).ToList();
    }
    protected validations = (): List<Notification> => null;

    private getNotificationsFromValidations = (): List<Notification> =>
        this.validations() || new List<Notification>()

    
}