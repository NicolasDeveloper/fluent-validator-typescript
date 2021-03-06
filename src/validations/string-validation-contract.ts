
import { Notifiable } from "../notifications/notifiable";
import { Notification } from "../notifications/notification";
import { IValidatable } from "./contracts/ivalidatable";

export class StringValidationContract extends Notifiable implements IValidatable {


    public stringIsNotNullOrEmpty(val: string, property: string, message: string): IValidatable {

        if (typeof val === "undefined" || val === null || !val || val === "") {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public stringIsNullOrEmpty(val: string, property: string, message: string): IValidatable {

        if (typeof val === "undefined" || val !== null || val || val !== "") {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public hasMinLen(val: string, min: number, property: string, message: string): IValidatable {

        if ((val || "").length < min) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public hasMaxLen(val: string, max: number, property: string, message: string): IValidatable {

        if ((val || "").length > max) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public hasLen(val: string, len: number, property: string, message: string): IValidatable {

        if ((val || "").length !== len) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public stringContains(val: string, text: string, property: string, message: string): IValidatable {

        if (((val || "").indexOf(text) < 0)) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public stringAreEquals(val: string, text: string, property: string, message: string): IValidatable {

        if (val !== text) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public stringAreNotEquals(val: string, text: string, property: string, message: string): IValidatable {

        if (val === text) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

    public isEmail(email: string, property: string, message: string): IValidatable {

        const pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return this.match((email || "").toLowerCase(), pattern, property, message);
    }

    public isUrl(url: string, property: string, message: string): IValidatable {

        const pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        return this.match((url || "").toLowerCase(), pattern, property, message);
    }

    public match(value: string, regex: RegExp, property: string, message: string): IValidatable {

        if (!regex.test(value)) {
            this.addNotification(new Notification(property, message));
        }
        return this;
    }

}