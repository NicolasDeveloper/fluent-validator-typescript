import { ValidationContract } from '../validations/validation-contract';
import { Notifiable } from '../notifications/notifiable';
import { Notification } from '../notifications/notification';
import { expect } from 'chai';
import 'mocha';

export class Product extends Notifiable {

    private _name: string;
    public get name(): string {
        return this._name;
    }
    constructor(name: string) {
        // call parent constructor 
        super();

        // set propertys
        this._name = name;

        // verify if it's valid
        let contract = new ValidationContract()
            .requires()
            .stringIsNotNullOrEmpty(this.name, "name", "name can't is empty");
        
        this.addNotifications(contract.notifications);
    }
}

describe('String testing', () => {

    it('should a string with value empty so return a notification', () => {
        const result = new Product("");
        expect(result.notifications.First().property).to.equal('name');
    });

});