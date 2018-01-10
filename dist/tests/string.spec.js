"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const validation_contract_1 = require("../validations/validation-contract");
describe("String test", () => {
    it("should a string with value empty so return a notification", () => {
        const wrong = new validation_contract_1.ValidationContract()
            .requires()
            .stringIsNotNullOrEmpty(null, "string", "String is Null")
            .stringIsNotNullOrEmpty("", "string", "String is Empty");
        chai_1.expect(wrong.invalid()).to.equal(true);
        chai_1.expect(wrong.notifications.Count()).to.equal(2);
        const right = new validation_contract_1.ValidationContract()
            .requires()
            .stringIsNotNullOrEmpty("Some valid string", "string", "String is Null");
        chai_1.expect(right.valid()).to.equal(true);
    });
});
