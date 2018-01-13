import { assert, expect } from "chai";
import "mocha";
import { ValidationContract } from "../src/index";

describe("Number test", () => {

    it("should be greater than", () => {

        const wrong = new ValidationContract()
            .requires()
            .isGreaterThan(10, 11, "number", "is not greater!")
            .isGreaterThan(11, 12, "number", "is not greater!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(2);

        const right = new ValidationContract()
            .requires()
            .isGreaterThan(10, 9, "number", "is not greater!");

        expect(right.valid).to.equal(true);
    });

    it("should be greater or equals than", () => {

        const wrong = new ValidationContract()
            .requires()
            .isGreaterOrEqualsThan(10, 11, "number", "is not greater!")
            .isGreaterOrEqualsThan(11, 12, "number", "is not greater!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(2);

        const right = new ValidationContract()
            .requires()
            .isGreaterOrEqualsThan(10, 10, "number", "is not greater!")
            .isGreaterOrEqualsThan(10, 9, "number", "is not greater!");

        expect(right.valid).to.equal(true);
    });

    it("should be lower than", () => {

        const wrong = new ValidationContract()
            .requires()
            .isLowerThan(10, 9, "number", "is not lower than!")
            .isLowerThan(7, 3, "number", "is not lower than!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(2);

        const right = new ValidationContract()
            .requires()
            .isLowerThan(9, 10, "number", "is not lower than!");

        expect(right.valid).to.equal(true);
    });

    it("should be lower or equals than", () => {

        const wrong = new ValidationContract()
            .requires()
            .isLowerOrEqualsThan(10, 9, "number", "is not lower or equals than!")
            .isLowerOrEqualsThan(9, 6, "number", "is not lower or equals than!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(2);

        const right = new ValidationContract()
            .requires()
            .isLowerOrEqualsThan(10, 10, "number", "is not lower or equals than!")
            .isLowerOrEqualsThan(9, 10, "number", "is not lower or equals than!");

        expect(right.valid).to.equal(true);
    });

    it("should be equals", () => {

        const wrong = new ValidationContract()
            .requires()
            .numberAreEquals(10, 9, "number", "aren't equals!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .numberAreEquals(10, 10, "number", "aren't equals!");

        expect(right.valid).to.equal(true);
    });

    it("should be not equals", () => {

        const wrong = new ValidationContract()
            .requires()
            .numberAreNotEquals(10, 10, "number", "aren't equals!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .numberAreNotEquals(10, 11, "number", "aren't equals!");

        expect(right.valid).to.equal(true);
    });


    it("should be between", () => {

        const wrong = new ValidationContract()
            .requires()
            .isBetween(16, 5, 15, "number", "isn't between!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .isBetween(10, 5, 15, "number", "isn't between!");

        expect(right.valid).to.equal(true);
    });
    
});