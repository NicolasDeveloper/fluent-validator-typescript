import { Notifiable } from "../notifications/notifiable";
import { StringValidationContract } from "./string-validation-contract";
import { IValidatable } from "./contracts/ivalidatable";

export class ValidationContract extends Notifiable implements StringValidationContract, IValidatable {
   

    constructor() {
        super();
    }

    public requires = (): ValidationContract => this;
    public concat(notifiable: Notifiable): ValidationContract {
        if (notifiable.invalid) {
            this.addNotifications(notifiable.notifications);
        }
        return this;
    }

    stringIsNotNullOrEmpty: (val: string, property: string, message: string) => ValidationContract;
}

applyMixins(ValidationContract, [StringValidationContract]);

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}