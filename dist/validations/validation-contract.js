"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifiable_1 = require("../notifications/notifiable");
const string_validation_contract_1 = require("./string-validation-contract");
class ValidationContract extends notifiable_1.Notifiable {
    constructor() {
        super();
        this.requires = () => this;
    }
    concat(notifiable) {
        if (notifiable.invalid) {
            this.addNotifications(notifiable.notifications);
        }
        return this;
    }
}
exports.ValidationContract = ValidationContract;
applyMixins(ValidationContract, [string_validation_contract_1.StringValidationContract]);
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
