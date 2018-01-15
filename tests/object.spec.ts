import { assert, expect } from "chai";
import { Guid } from "guid-typescript";
import "mocha";
import { Notifiable, ValidationContract } from "../src/index";

class ObjectTest extends Notifiable {
    public id: Guid;

    constructor() {
        super();
        this.id = Guid.create();
    }

    public equals(other: ObjectTest): boolean {
        return (this.id === other.id);
    }
}

describe("Object test", () => {

    it("should be not null", () => {

        const wrong = new ValidationContract()
            .requires()
            .objectIsNotNull(null, "object", "should be not null!");

            
        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .objectIsNotNull(new ObjectTest(), "object", "should be not null");

        expect(right.valid).to.equal(true);
    });

    it("should be null", () => {

        const wrong = new ValidationContract()
            .requires()
            .objectIsNull(new ObjectTest(), "object", "should be null!");

            
        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(1);

        const right = new ValidationContract()
            .requires()
            .objectIsNull(null, "object", "should be null");

        expect(right.valid).to.equal(true);
    });


    it("should be equals", () => {

        const wrong = new ValidationContract()
            .requires()
            .objectAreEquals(new ObjectTest(), new ObjectTest(), "object", "should be equals!")
            .objectAreEquals(null, new ObjectTest(), "object", "should be equals!");
            
        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(2);

        const obj = new ObjectTest();
        const right = new ValidationContract()
            .requires()
            .objectAreEquals(obj, obj, "object", "should be equals!");

        expect(right.valid).to.equal(true);
    });

    it("should be not equals", () => {

        const obj = new ObjectTest();
        const wrong = new ValidationContract()
            .requires()
            .objectAreNotEquals(obj, obj, "object", "should be not equals!")
            .objectAreNotEquals(null, null, "object", "should be equals!");
            
        expect(wrong.invalid).to.equal(true);
        expect(wrong.notifications.Count()).to.equal(2);

        
        const right = new ValidationContract()
            .requires()
            .objectAreNotEquals(null, new ObjectTest(), "object", "should be not equals!")
            .objectAreNotEquals(new ObjectTest(), new ObjectTest(), "object", "should be not equals!");

        expect(right.valid).to.equal(true);
    });

});