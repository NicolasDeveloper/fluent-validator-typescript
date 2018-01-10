
import { Notifiable } from "../notifications/notifiable";
import { Notification } from "../notifications/notification";
import { IValidatable } from "./contracts/ivalidatable";

export class NumberValidationContract extends Notifiable implements IValidatable {


    public isGreaterThan(val: number, comparer: number, property: string, message: string): IValidatable {

        if (val <= comparer) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public isGreaterOrEqualsThan(val: number, comparer: number, property: string, message: string): IValidatable {

        if (val < comparer) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public isLowerThan(val: number, comparer: number, property: string, message: string): IValidatable {

        if (val >= comparer) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public isLowerOrEqualsThan(val: number, comparer: number, property: string, message: string): IValidatable {

        if (val > comparer) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public numberAreEquals(val: number, comparer: number, property: string, message: string): IValidatable {

        if (val !== comparer) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public numberAreNotEquals(val: number, comparer: number, property: string, message: string): IValidatable {

        if (val === comparer) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public isBetween(val: number, from: number, to: number, property: string, message: string): IValidatable {
        
        if (!(val > from && val < to)) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

}