import { assert, expect } from "chai";
import "mocha";
import { ValidationContract } from "../src/index";

describe("String test", () => {

    it("should be not null or empty", () => {

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

    it("should has min lengh of 5 charecters", () => {

        const wrong = new ValidationContract()
            .requires()
            .hasMinLen("null", 5, "string", "String len is less than permited");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .hasMinLen("Some Valid String", 5, "string", "String len is less than permited");

        expect(right.valid).to.equal(true);
    });

    it("should has max lengh of 3 charecters", () => {

        const wrong = new ValidationContract()
            .requires()
            .hasMaxLen("null", 3, "string", "String len is more than permited");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .hasMaxLen("Some", 5, "string", "String len is less than permited");

        expect(right.valid).to.equal(true);
    });

    it("should has lengh of 3 charecters", () => {

        const wrong = new ValidationContract()
            .requires()
            .hasLen("null", 3, "string", "String len is more than permited");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .hasLen("Some1", 5, "string", "String len is less than permited");

        expect(right.valid).to.equal(true);
    });

    it("should contains world in string", () => {

        const wrong = new ValidationContract()
            .requires()
            .stringContains("some text here", "banana", "string", "String does not contains banana");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .stringContains("some banana here", "banana", "string", "String does not contains banana");

        expect(right.valid).to.equal(true);
    });

    it("should valid email", () => {

        const wrong = new ValidationContract()
            .requires()
            .isEmail("wrongemail", "string", "Invalid E-mail");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .isEmail("nicolas.senac15@gmail.com", "string", "Invalid E-mail");

        expect(right.valid).to.equal(true);
    });

    it("should valid url", () => {

        const wrong = new ValidationContract()
            .requires()
            .isUrl("wrongurl", "string", "Invalid URL");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .isUrl("https://gmail.com", "string", "Invalid URL");

        expect(right.valid).to.equal(true);
    });


    it("should valid regex", () => {

        const wrong = new ValidationContract()
            .requires()
            .match("wrongurl", /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/, "string", "Invalid URL");

        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .match("http://gmail.com", /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/, "string", "Invalid URL");

        expect(right.valid).to.equal(true);
    });

});