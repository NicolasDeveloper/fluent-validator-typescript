# Fluent Validator Typescript

Fluent Validator Typescript is a port from https://github.com/andrebaltieri/FluentValidatorwhich is an implementation of design by contracts in C#.


## Instalation and usage
### Instalation

```
npm i fluent-validator-typescript --save
```

### Basic usage

```
export class Product extends Notifiable {    
    public name: string;
    
    constructor(name: string) {
        super();

        const contract = new ValidationContract()
            .stringIsNotNullOrEmpty(name, "name", "invalid name!")
            .hasMinLen(name, 5, "string", "name len is less than permited");
        
        this.addNotifications(contract.notifications);
    }
}

const product =  Product("product");
if(product.valid) {
    console.log("do anything");
}

```

## Props and Methods

| Method/Prop | Desc | Test | Status |
|---|---|---|---|
| stringIsNotNullOrEmpty (val: string, property: string, message: string) | check if value is not null or empty | OK | Ready |
| stringIsNullOrEmpty (val: string, property: string, message: string) |  check if value is null or empty | OK |  Ready |
| hasMinLen (val: string, min: number, property: string, message: string) |  check min value | OK | Ready  |
| hasMaxLen (val: string, max: number, property: string, message: string) |  check max value | OK | Ready  |
| hasLen (val: string, len: number, property: string, message: string) |  check fixed length of value | OK | Ready  |
| stringContains (val: string, text: string, property: string, message: string) |  check if string contains the text | OK | Ready  |
| stringAreEquals (val: string, text: string, property: string, message: string) |  validate if strings are equals  | OK | Ready  |
| stringAreNotEquals (val: string, text: string, property: string, message: string) | check if text isn't the same as the other | OK | Ready  |
| isEmail (email: string, property: string, message: string) | validate if email is valid | OK | Ready  |
| isUrl (url: string, property: string, message: string) | validate if url is valid | OK | Ready  |
| match (value: string, regex: RegExp, property: string, message: string) | validate if regex is match | OK | Ready  |
| isGreaterThan (val: number, comparer: number, property: string, message: string) | validate if number is greater than another | OK | Ready  |
| isGreaterOrEqualsThan (val: number, comparer: number, property: string, message: string) | validate if number is greater than another or equals | OK | Ready  |
| isLowerThan (val: number, comparer: number, property: string, message: string) |  validate if number is lower than another | OK | Ready  |
| isLowerOrEqualsThan (val: number, comparer: number, property: string, message: string) |  validate if number is lower than another or equals | OK | Ready  |
| numberAreEquals (val: number, comparer: number, property: string, message: string) |  validate if number are equals as another | OK | Ready  |
| numberAreNotEquals (val: number, comparer: number, property: string, message: string) | validate if numbers are equals | OK | Ready  |
| isBetween (val: number, comparer: number, property: string, message: string) |  validate if number is between | OK | Ready  |
| valid : boolean | status of the contact to know if it's valid | OK | Ready  |
| invalid : boolean | status of the contact to know if it's invalid | OK | Ready  |
| guidIsNotNullOrEmpty (val: Guid, property: string, message: string) | validate if guid code is not null or empty | OK | Ready  |
| guidIsNullOrEmpty (val: Guid, property: string, message: string) | validate if guid code is null or empty | OK | Ready  |
| guidIsNotEmpty (val: Guid, property: string, message: string) | validate if guid code is not empty | OK | Ready  |
| guidIsEmpty (val: Guid, property: string, message: string) | validate if guid code is empty | OK | Ready  |
| guidAreEquals (val: Guid, comparer: Guid, property: string, message: string) | validate if guids codes are equals  | OK | Ready  |
| objectIsNotNull (val: any, property: string, message: string): IValidatable | validate if object is not null  | OK | Ready  |
| objectIsNull (val: any, property: string, message: string): IValidatable | validate if object is null  | OK | Ready  |
| objectAreEquals (val: any, comparer: any, property: string, message: string) | validate if object are equals  | OK | Ready  |
| objectAreNotEquals (val: any, comparer: any, property: string, message: string) | validate if object are not equals  | OK | Ready  |
| isTrue (val: boolean, property: string, message: string): IValidatable | validate if is true value  | OK | Ready  |
| isFalse (val: boolean, property: string, message: string): IValidatable | validate if is false value  | OK | Ready  |
