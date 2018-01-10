import { Notifiable } from "../../notifications/notifiable";
import { ValidationContract } from "../validation-contract";

export abstract class Contract extends Notifiable  {

    private _validationcontract: ValidationContract;
    public get validationContract(): ValidationContract {
        return this._validationcontract;
    }
    constructor() {
        super();
        this._validationcontract = new ValidationContract();
    }
}
