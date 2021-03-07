export interface PizzaInterface
{
    getType(): string
}

export class Pizza implements PizzaInterface
{
    getType(): string {
        return "Base pizza"
    }
}

export abstract class PizzaDecorator implements PizzaInterface
{
    protected pizza: PizzaInterface

    protected constructor(pizza: PizzaInterface) {
        this.pizza = pizza
    }

    getType(): string {
        return this.pizza.getType()
    }
}

export class Mozzarella extends PizzaDecorator
{
    constructor(pizza: PizzaInterface) {
        super(pizza)
    }

    getType(): string {
        return this.pizza.getType() + " with mozzarella"
    }
}

export class Oignons extends PizzaDecorator
{
    constructor(pizza: PizzaInterface) {
        super(pizza)
    }

    getType(): string {
        return this.pizza.getType() + " with oignons"
    }
}
