import { assert, expect } from "chai";
import { Guid } from "guid-typescript";
import "mocha";
import { ValidationContract } from "../src/index";

describe("Guid test", () => {

    it("should be not null or empty", () => {

        const wrong = new ValidationContract()
            .requires()
            .guidIsNotNullOrEmpty(null, "guid", "should be not null!")
            .guidIsNotNullOrEmpty(Guid.createEmpty(), "guid", "should be not empty!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(2);

        const right = new ValidationContract()
            .requires()
            .guidIsNotNullOrEmpty(Guid.create(), "guid", "should be not null or empty!");

        expect(right.valid).to.equal(true);
    });

    it("should be null or empty", () => {

        const wrong = new ValidationContract()
            .requires()
            .guidIsNullOrEmpty(Guid.create(), "guid", "should be empty or null!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .guidIsNullOrEmpty(null, "guid", "should be empty or null!")
            .guidIsNullOrEmpty(Guid.createEmpty(), "guid", "should be empty or null!");

        expect(right.valid).to.equal(true);
    });

    it("should be empty", () => {
        const wrong = new ValidationContract()
            .requires()
            .guidIsEmpty(Guid.create(), "guid", "should be empty!")
            .guidIsEmpty(null, "guid", "should be empty!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(2);

        const right = new ValidationContract()
            .requires()
            .guidIsEmpty(Guid.createEmpty(), "guid", "should be empty!");

        expect(right.valid).to.equal(true);
    });

    it("should be not empty", () => {
        const wrong = new ValidationContract()
            .requires()
            .guidIsNotEmpty(Guid.createEmpty(), "guid", "should be not empty!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .guidIsNotEmpty(Guid.create(), "guid", "should be not empty!")
            .guidIsNotEmpty(null, "guid", "should be not empty!");

        expect(right.valid).to.equal(true);
    });

    it("should be equals", () => {
        const wrong = new ValidationContract()
            .requires()
            .guidAreEquals(Guid.create(), Guid.create(), "guid", "should be not empty!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const equal = Guid.create();
        const right = new ValidationContract()
            .requires()
            .guidAreEquals(equal, equal, "guid", "should be not empty!");

        expect(right.valid).to.equal(true);
    });

    it("should be not equals", () => {

        const equal = Guid.create();
        const wrong = new ValidationContract()
            .requires()
            .guidAreNotEquals(equal, equal, "guid", "should be not empty!");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .guidAreNotEquals(Guid.create(), Guid.create(), "guid", "should be not empty!");

        expect(right.valid).to.equal(true);
    });

});