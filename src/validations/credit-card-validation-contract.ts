
import { Notifiable } from "../notifications/notifiable";
import { Notification } from "../notifications/notification";
import { IValidatable } from "./contracts/ivalidatable";

export class CreditCardValidationContract extends Notifiable implements IValidatable {


    public creditCardDateIsValid(val: string, property: string, message: string): IValidatable {

        const patternDate: RegExp = /^\d{1,2}\/\d{4}$/;

        if (!patternDate.test(val)) {
            this.addNotification(new Notification(property, message));
        }

        return this;
    }

    public creditCardDateIsGreaterThanToday(val: string, property: string, message: string): IValidatable {
        
        const patternDate: RegExp = /^\d{1,2}\/\d{4}$/;
        
        if (!patternDate.test(val)) {
            this.addNotification(new Notification(property, message));
            return this;
        }

        const today = new Date();
        const someday = new Date();
        const date = val.split("/");
        someday.setFullYear(parseInt(date[1], 10), parseInt(date[0], 10), 1);

        if (someday < today) {
            this.addNotification(new Notification(property, message));
        }

        return this;
    }

}