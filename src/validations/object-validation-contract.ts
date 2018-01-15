
import { Notifiable } from "../notifications/notifiable";
import { Notification } from "../notifications/notification";
import { IValidatable } from "./contracts/ivalidatable";

export class ObjectValidationContract extends Notifiable implements IValidatable {

    public objectIsNotNull(val: any, property: string, message: string): IValidatable {

        if (typeof val === "undefined" || val === null || !val) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public objectIsNull(val: any, property: string, message: string): IValidatable {

        if (typeof val === "undefined" || val !== null || val) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public objectAreEquals(val: any, compare: any, property: string, message: string): IValidatable {

        if (val && typeof val.equals === "function" && !val.equals(compare)) {
            this.addNotification(new Notification(property, message));
        } else if (val !== compare) {
            this.addNotification(new Notification(property, message));
        }

        return this;
    }

    public objectAreNotEquals(val: any, compare: any, property: string, message: string): IValidatable {

        if (val && typeof val.equals === "function" && val.equals(compare)) {
            this.addNotification(new Notification(property, message));
        } else if (val === compare) {
            this.addNotification(new Notification(property, message));
        }
        
        return this;
    }



}