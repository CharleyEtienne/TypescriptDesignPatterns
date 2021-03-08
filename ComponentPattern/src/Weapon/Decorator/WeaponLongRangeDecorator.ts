import WeaponComponentDecorator from "./WeaponComponentDecorator"

export default class WeaponLongRangeDecorator extends WeaponComponentDecorator
{
    public use(): string {
        return this._weapon.use() + " with a long-range"
    }
}