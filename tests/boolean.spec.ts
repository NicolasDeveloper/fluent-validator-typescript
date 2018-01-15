import { assert, expect } from "chai";
import { Guid } from "guid-typescript";
import "mocha";
import { Notifiable, ValidationContract } from "../src/index";


describe("Boolean test", () => {

    it("should be true", () => {

        const wrong = new ValidationContract()
            .requires()
            .isTrue(false, "boolean", "should be true!");

            
        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .isTrue(true, "boolean", "should be true!");

        expect(right.valid).to.equal(true);
    });

    it("should be false", () => {

        const wrong = new ValidationContract()
            .requires()
            .isFalse(true, "boolean", "should be false!");

            
        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .isFalse(false, "boolean", "should be false!");

        expect(right.valid).to.equal(true);
    });

});