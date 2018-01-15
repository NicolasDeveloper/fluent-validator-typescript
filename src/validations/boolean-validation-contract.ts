
import { Notifiable } from "../notifications/notifiable";
import { Notification } from "../notifications/notification";
import { IValidatable } from "./contracts/ivalidatable";

export class BooleanValidationContract extends Notifiable implements IValidatable {

    public isTrue(val: boolean, property: string, message: string): IValidatable {

        if (!val) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public isFalse(val: boolean, property: string, message: string): IValidatable {

        if (val) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }
}