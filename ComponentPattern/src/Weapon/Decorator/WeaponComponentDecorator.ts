import UsableComponent from "../UsableComponent"

export default abstract class WeaponComponentDecorator implements UsableComponent
{
    protected _weapon: UsableComponent

    constructor(weapon: UsableComponent) {
        this._weapon = weapon
    }

    hasKey(key: string): boolean {
        return this._weapon.hasKey(key)
    }

    serialize(): any {
        return this._weapon.serialize()
    }

    use(): string {
        return this._weapon.use()
    }
}