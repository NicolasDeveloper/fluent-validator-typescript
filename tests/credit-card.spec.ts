import { assert, expect } from "chai";
import { Guid } from "guid-typescript";
import "mocha";
import { Notifiable, ValidationContract } from "../src/index";


describe("Credit card test", () => {

    it("should be valid date", () => {

        const wrong = new ValidationContract()
            .requires()
            .creditCardDateIsValid("12/11", "date", "should be valid date!")
            .creditCardDateIsValid("12/", "date", "should be valid date!")
            .creditCardDateIsValid("", "date", "should be valid date!");


        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(3);

        const right = new ValidationContract()
            .requires()
            .creditCardDateIsValid("12/2011", "date", "should be valid date!");

        expect(right.valid).to.equal(true);
    });

    it("shouldn't be expired", () => {

        const wrong = new ValidationContract()
            .requires()
            .creditCardDateIsGreaterThanToday("12/2011", "date", "shouldn't be expired!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const rightDate = new Date();
        const right = new ValidationContract()
            .requires()
            .creditCardDateIsGreaterThanToday((rightDate.getMonth() + 1) + "/" + rightDate.getFullYear(), "date", "shouldn't be expired!");

        expect(right.valid).to.equal(true);
    });



});