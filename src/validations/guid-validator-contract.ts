import { Guid } from "guid-typescript";
import { Notifiable } from "../notifications/notifiable";
import { Notification } from "../notifications/notification";
import { IValidatable } from "./contracts/ivalidatable";

export class GuidValidationContract extends Notifiable implements IValidatable {

    public guidIsNotNullOrEmpty(val: Guid, property: string, message: string): IValidatable {

        if (!val || val === null || typeof val === "undefined" || val.isEmpty() || !Guid.isGuid(val)) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public guidIsNullOrEmpty(val: Guid, property: string, message: string): IValidatable {

        if (val !== null || val) {
            if (!Guid.isGuid(val) || !val.isEmpty()) {
                this.addNotification(new Notification(property, message));
            }
        }
        return this;
    }

    public guidIsNotEmpty(val: Guid, property: string, message: string): IValidatable {

        if (val || val !== null) {
            if (!Guid.isGuid(val) || val.isEmpty()) {
                this.addNotification(new Notification(property, message));
            }
        }
        return this;
    }

    public guidIsEmpty(val: Guid, property: string, message: string): IValidatable {

        if (val === null || !val || !Guid.isGuid(val) || !(val.isEmpty())) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public guidAreEquals(val: Guid, comparer: Guid, property: string, message: string): IValidatable {

        if (!val.equals(comparer)) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public guidAreNotEquals(val: Guid, comparer: Guid, property: string, message: string): IValidatable {

        if (val.equals(comparer)) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

}