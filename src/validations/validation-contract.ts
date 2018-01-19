
import { Guid } from "guid-typescript";
import { Notifiable } from "../notifications/notifiable";
import { BooleanValidationContract } from "./boolean-validation-contract";
import { IValidatable } from "./contracts/ivalidatable";
import { CreditCardValidationContract } from "./credit-card-validation-contract";
import { DateValidationContract } from "./date-validation-contract";
import { GuidValidationContract } from "./guid-validator-contract";
import { NumberValidationContract } from "./number-validation-contract";
import { ObjectValidationContract } from "./object-validation-contract";
import { StringValidationContract } from "./string-validation-contract";

export class ValidationContract extends Notifiable implements
    StringValidationContract,
    NumberValidationContract,
    GuidValidationContract,
    ObjectValidationContract,
    BooleanValidationContract,
    DateValidationContract,
    CreditCardValidationContract,
    IValidatable {

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

    /** 
     * Number Validation Contract
     */
    public isGreaterThan: (val: number, comparer: number, property: string, message: string) => ValidationContract;
    public isGreaterOrEqualsThan: (val: number, comparer: number, property: string, message: string) => ValidationContract;
    public isLowerThan: (val: number, comparer: number, property: string, message: string) => ValidationContract;
    public isLowerOrEqualsThan: (val: number, comparer: number, property: string, message: string) => ValidationContract;
    public numberAreEquals: (val: number, comparer: number, property: string, message: string) => ValidationContract;
    public numberAreNotEquals: (val: number, comparer: number, property: string, message: string) => ValidationContract;
    public isBetween: (val: number, from: number, to: number, property: string, message: string) => ValidationContract;

    /** 
     * Guid Validation Contract
     */
    public guidIsNotNullOrEmpty: (val: Guid, property: string, message: string) => ValidationContract;
    public guidIsNullOrEmpty: (val: Guid, property: string, message: string) => ValidationContract;
    public guidIsNotEmpty: (val: Guid, property: string, message: string) => ValidationContract;
    public guidIsEmpty: (val: Guid, property: string, message: string) => ValidationContract;
    public guidAreEquals: (val: Guid, comparer: Guid, property: string, message: string) => ValidationContract;
    public guidAreNotEquals: (val: Guid, comparer: Guid, property: string, message: string) => ValidationContract;

    /** 
     * Object Validation Contract
     */
    public objectIsNotNull: (val: any, property: string, message: string) => ValidationContract;
    public objectIsNull: (val: any, property: string, message: string) => ValidationContract;
    public objectAreEquals: (val: any, compare: any, property: string, message: string) => ValidationContract;
    public objectAreNotEquals: (val: any, compare: any, property: string, message: string) => ValidationContract;

    /** 
     * Boolean Validation Contract
     */
    public isTrue: (val: boolean, property: string, message: string) => ValidationContract;
    public isFalse: (val: boolean, property: string, message: string) => ValidationContract;


    /** 
     * Date Validation Contract
     */
    public dateIsGreaterThan: (val: Date, comparer: Date, property: string, message: string) => ValidationContract;
    public dateIsGreaterOrEqualsThan: (val: Date, comparer: Date, property: string, message: string) => ValidationContract;
    public dateIsLowerThan: (val: Date, comparer: Date, property: string, message: string) => ValidationContract;
    public dateIsLowerOrEqualsThan: (val: Date, comparer: Date, property: string, message: string) => ValidationContract;
    public dateIsBetween: (val: Date, from: Date, to: Date, property: string, message: string) => ValidationContract;

    /** 
     * Credit Card Validation Contract
     */    
    public creditCardDateIsValid: (val: string, property: string, message: string) => ValidationContract;
    public creditCardDateIsGreaterThanToday: (val: string, property: string, message: string) => ValidationContract;

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

applyMixins(ValidationContract, [
    StringValidationContract,
    NumberValidationContract,
    GuidValidationContract,
    ObjectValidationContract,
    BooleanValidationContract,
    CreditCardValidationContract,
    DateValidationContract]);

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