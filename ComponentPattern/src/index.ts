import GameObject from "./GameObject"
import TeamComponent from "./TeamComponent"
import WeaponLongRangeDecorator from "./Weapon/Decorator/WeaponLongRangeDecorator"
import WeaponComponent from "./Weapon/WeaponComponent"
import WeaponCooldownDecorator from "./Weapon/Decorator/WeaponCooldownDecorator"

const player = new GameObject(new TeamComponent('douki.douk'))
player.addComponents(
    new WeaponLongRangeDecorator(
        new WeaponCooldownDecorator(
            new WeaponComponent(player)
        )
    )
)

const playerTeam = <TeamComponent>player.getComponent('team')
const playerWeapon = <WeaponComponent>player.getComponent('weapon')

console.log(playerTeam.team)
console.log(playerWeapon.use())
console.log(player.serialize())