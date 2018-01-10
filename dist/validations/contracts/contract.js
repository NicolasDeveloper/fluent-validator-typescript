"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifiable_1 = require("../../notifications/notifiable");
const validation_contract_1 = require("../validation-contract");
class Contract extends notifiable_1.Notifiable {
    get validationContract() {
        return this._validationcontract;
    }
    constructor() {
        super();
        this._validationcontract = new validation_contract_1.ValidationContract();
    }
}
exports.Contract = Contract;
