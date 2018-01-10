import { assert, expect } from "chai";
import "mocha";
import { Notifiable } from "../notifications/notifiable";
import { Notification } from "../notifications/notification";
import { ValidationContract } from "../validations/validation-contract";

describe("String test", () => {

    it("should a string with value empty so return a notification", () => {

        const wrong = new ValidationContract()
            .requires()
            .stringIsNotNullOrEmpty(null, "string", "String is Null")
            .stringIsNotNullOrEmpty("", "string", "String is Empty");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(2);
        
        const right = new ValidationContract()
            .requires()
            .stringIsNotNullOrEmpty("Some valid string", "string", "String is Null");

        expect(right.valid).to.equal(true);
    });



});