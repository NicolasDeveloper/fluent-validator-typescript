import { assert, expect } from "chai";
import { Guid } from "guid-typescript";
import "mocha";
import { Notifiable, ValidationContract } from "../src/index";


describe("Date test", () => {

    it("should be greater than", () => {
        const wrongDate = new Date("11/10/2011");
        const wrong = new ValidationContract()
            .requires()
            .dateIsGreaterThan(wrongDate, new Date(), "date", "should be greater than");


        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const righDate = new Date();
        righDate.setDate(righDate.getDate() + 30);
        const right = new ValidationContract()
            .requires()
            .dateIsGreaterThan(righDate, new Date(), "date", "should be greater than");

        expect(right.valid).to.equal(true);
    });

    it("should be greater or equals than", () => {
        const wrongDate = new Date("11/10/2011");
        const wrong = new ValidationContract()
            .requires()
            .dateIsGreaterOrEqualsThan(wrongDate, new Date(), "date", "should be greater or equals than");


        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .dateIsGreaterOrEqualsThan(new Date(), new Date(), "date", "should be greater or equals than");

        expect(right.valid).to.equal(true);
    });

    it("should be lower than", () => {
        const wrongDate = new Date("11/10/2011");
        const wrong = new ValidationContract()
            .requires()
            .dateIsLowerThan(new Date(), wrongDate, "date", "should be lower than");


        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const rightDate = new Date();
        rightDate.setDate(rightDate.getDate() + 30);
        const right = new ValidationContract()
            .requires()
            .dateIsLowerThan(new Date(), rightDate, "date", "should be lower than");

        expect(right.valid).to.equal(true);
    });

    it("should be lower or equals than", () => {
        const wrongDate = new Date("11/10/2011");
        const wrong = new ValidationContract()
            .requires()
            .dateIsLowerOrEqualsThan(new Date(), wrongDate, "date", "should be lower or equals than");


        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const rightDate = new Date();
        rightDate.setDate(rightDate.getDate() + 30);
        const right = new ValidationContract()
            .requires()
            .dateIsLowerOrEqualsThan(new Date(), rightDate, "date", "should be lower or equals than")
            .dateIsLowerOrEqualsThan(new Date(), new Date(), "date", "should be lower or equals than");

        expect(right.valid).to.equal(true);
    });

    it("should be between", () => {
        const wrongDate = new Date();
        wrongDate.setDate(wrongDate.getDate() + 30);

        const wrong = new ValidationContract()
            .requires()
            .dateIsBetween(wrongDate, new Date("11/10/2011"), new Date(), "date", "should be between");


        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const rightDate = new Date();
        rightDate.setDate(rightDate.getDate() - 10);
        const right = new ValidationContract()
            .requires()
            .dateIsBetween(rightDate, new Date("11/10/2011"), new Date(), "date", "should be between");;

        expect(right.valid).to.equal(true);
    });


});