import WeaponComponentDecorator from "./WeaponComponentDecorator"

export default class WeaponCooldownDecorator extends WeaponComponentDecorator
{
    public use(): string {
        return this._weapon.use() + " with a cooldown"
    }
}