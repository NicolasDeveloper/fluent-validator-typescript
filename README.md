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
            .stringIsNotNullOrEmpty(name, "name", "name inválid!");
        
        this.addNotifications(contract.notifications);
    }
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
| stringAreEquals (val: string, text: string, property: string, message: string) |  check if text is the same than other  | OK | Ready  |
| stringAreNotEquals (val: string, text: string, property: string, message: string) | check if text isn't the same as the other | OK | Ready  |
| isEmail (email: string, property: string, message: string) | verify if email is valid | OK | Ready  |
| isUrl (url: string, property: string, message: string) | verify if url is valid | OK | Ready  |
| match (value: string, regex: RegExp, property: string, message: string) | verify if regex is match | OK | Ready  |
| isGreaterThan (val: number, comparer: number, property: string, message: string) | verify if number is greater than another | OK | Ready  |
| isGreaterOrEqualsThan (val: number, comparer: number, property: string, message: string) | verify if number is greater than another or equals | OK | Ready  |
| isLowerThan (val: number, comparer: number, property: string, message: string) |  verify if number is lower than another | OK | Ready  |
| isLowerOrEqualsThan (val: number, comparer: number, property: string, message: string) |  verify if number is lower than another or equals | OK | Ready  |
| numberAreEquals (val: number, comparer: number, property: string, message: string) |  verify if number are equals as another | OK | Ready  |
| numberAreNotEquals (val: number, comparer: number, property: string, message: string) |  verify if number aren't equals as another | OK | Ready  |
| isBetween (val: number, comparer: number, property: string, message: string) |  verify if number is between | OK | Ready  |
| valid : boolean | status of the contact to know if it's valid | OK | Ready  |
| invalid : boolean | status of the contact to know if it's invalid | OK | Ready  |