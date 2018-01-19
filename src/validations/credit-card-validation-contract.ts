
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

    public creditCardNumberIsValid(val: string, property: string, message: string): IValidatable {

        // accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(val)) {
            return false;
        }

        // The Luhn Algorithm. It's so pretty.
        let nCheck: number = 0;
        let nDigit: number = 0;
        let bEven = false;

        val = val.replace(/\D/g, "");

        for (let n = val.length - 1; n >= 0; n--) {
            const cDigit = val.charAt(n);

            nDigit = parseInt(cDigit, 10);

            if (bEven) {
                // tslint:disable-next-line:no-conditional-assignment
                if ((nDigit *= 2) > 9) {
                    nDigit -= 9;
                }
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        if (!((nCheck % 10) === 0)) {
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