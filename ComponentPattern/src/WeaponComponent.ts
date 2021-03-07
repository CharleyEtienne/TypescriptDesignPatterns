import GameObject from "./GameObject"
import Component from "./Component"

export default class WeaponComponent implements Component
{
    private _weapon: string

    constructor(object: GameObject) {
        this._weapon = 'weapon of ' + object.id
    }

    public use(): void {
        console.log(this._weapon)
    }

    getName(): string {
        return 'weapon'
    }
}