
import { Notifiable } from "../notifications/notifiable";
import { Notification } from "../notifications/notification";
import { IValidatable } from "./contracts/ivalidatable";

export class DateValidationContract extends Notifiable implements IValidatable {

    public dateIsGreaterThan(val: Date, comparer: Date, property: string, message: string): IValidatable {

        if (val <= comparer) {
            this.addNotification(new Notification(property, message));
        }

        return this;
    }

    public dateIsGreaterOrEqualsThan(val: Date, comparer: Date, property: string, message: string): IValidatable {

        if (val < comparer) {
            this.addNotification(new Notification(property, message));
        }
        
        return this;
    }

    public dateIsLowerThan(val: Date, comparer: Date, property: string, message: string): IValidatable {

        if (val >= comparer) {
            this.addNotification(new Notification(property, message));
        }
        
        return this;
    }

    public dateIsLowerOrEqualsThan(val: Date, comparer: Date, property: string, message: string): IValidatable {

        if (val > comparer) {
            this.addNotification(new Notification(property, message));
        }
        
        return this;
    }

    public dateIsBetween(val: Date, from: Date, to: Date, property: string, message: string): IValidatable {

        if (!(val > from && val < to)) {
            this.addNotification(new Notification(property, message));
        }
        
        return this;
    }
   
}