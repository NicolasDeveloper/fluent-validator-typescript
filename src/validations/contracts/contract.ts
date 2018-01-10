import { Notifiable } from "../../notifications/notifiable";
import { ValidationContract } from "../validation-contract";

export abstract class Contract extends Notifiable  {

    private _validationContract: ValidationContract;
    public get validationContract(): ValidationContract {
        return this._validationContract;
    }
    
    constructor() {
        super();
        this._validationContract = new ValidationContract();
    }
}