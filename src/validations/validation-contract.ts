import { Notifiable } from "../notifications/notifiable";
import { IValidatable } from "./contracts/ivalidatable";
import { StringValidationContract } from "./string-validation-contract";


export class ValidationContract extends Notifiable implements StringValidationContract, IValidatable {

    /** 
     * String Validation Contract
     */
    public hasMinLen: (val: string, min: number, property: string, message: string) => ValidationContract;
    public hasMaxLen: (val: string, max: number, property: string, message: string) => ValidationContract;
    public hasLen: (val: string, len: number, property: string, message: string) => ValidationContract;
    public isEmail: (email: string, property: string, message: string) => ValidationContract;
    public isUrl: (url: string, property: string, message: string) => ValidationContract;
    public match: (value: string, regex: RegExp, property: string, message: string) => ValidationContract;
    public stringIsNotNullOrEmpty: (val: string, property: string, message: string) => ValidationContract;
    public stringIsNullOrEmpty: (val: string, property: string, message: string) => ValidationContract;
    public stringContains: (val: string, text: string, property: string, message: string) => ValidationContract;
    public stringAreEquals: (val: string, text: string, property: string, message: string) => ValidationContract;
    public stringAreNotEquals: (val: string, text: string, property: string, message: string) => ValidationContract;

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