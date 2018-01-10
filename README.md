# Fluent Validator Typescript

Fluent Validator Typescript is a port from https://github.com/andrebaltieri/FluentValidatorwhich is an implementation of design by contracts in C#.


## Instalation and usage
### Instalation

```
npm install fluent-validator --save
```

### Basic usage

```
export class Product extends Notifiable {    
    public name: string;
    
    constructor(name: string) {
        super();
        const contract = new ValidationContract()
            .stringIsNullOrEmpty(name, "name", "name inválid!");
        
        this.addNotifications(contract.notifications);
    }
}
```