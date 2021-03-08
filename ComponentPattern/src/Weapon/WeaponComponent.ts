import GameObject from "../GameObject"
import UsableComponent from "./UsableComponent"

export default class WeaponComponent implements UsableComponent
{
    protected _weapon: string

    constructor(object: GameObject) {
        this._weapon = 'weapon of ' + object.id
    }

    public use(): string {
        return this._weapon
    }

    hasKey(value: string): boolean {
        return 'weapon' === value
    }

    serialize(): any {
        return {
            weapon: this._weapon
        }
    }
}