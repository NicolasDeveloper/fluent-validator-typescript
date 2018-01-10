import { Notifiable } from "../notifications/notifiable";
import { IValidatable } from "./contracts/ivalidatable";
import { StringValidationContract } from "./string-validation-contract";


export class ValidationContract extends Notifiable implements StringValidationContract, IValidatable {
   
    public stringIsNotNullOrEmpty: (val: string, property: string, message: string) => ValidationContract;
    
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
    
}

applyMixins(ValidationContract, [StringValidationContract]);

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}