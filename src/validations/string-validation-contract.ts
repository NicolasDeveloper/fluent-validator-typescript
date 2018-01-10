import { ValidationContract } from "./validation-contract";
import { Notification } from "../notifications/notification";
import { Notifiable } from "../notifications/notifiable";
import { IValidatable } from "./contracts/ivalidatable";

export class StringValidationContract extends Notifiable implements IValidatable {
    
    
    public stringIsNotNullOrEmpty(val: string , property: string , message: string): IValidatable
    {
        if (val || val === undefined || val === null || val == "")
            this.addNotification(new Notification(property, message));

        return this;
    }
}