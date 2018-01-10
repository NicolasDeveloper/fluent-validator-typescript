
import { Notifiable } from "../notifications/notifiable";
import { Notification } from "../notifications/notification";
import { IValidatable } from "./contracts/ivalidatable";
import { ValidationContract } from "./validation-contract";

export class StringValidationContract extends Notifiable implements IValidatable {
    
    
    public stringIsNotNullOrEmpty(val: string , property: string , message: string): IValidatable {
        
        if (val || val === undefined || val === null || val === "") {
            this.addNotification(new Notification(property, message));
        }
        return this;

    }
}