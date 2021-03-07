import GameObject from "./GameObject"
import WeaponComponent from "./WeaponComponent"
import TeamComponent from "./TeamComponent"

const player = new GameObject([
    new TeamComponent('douki.douk')
])

player.addComponents([
    new WeaponComponent(player)
])

const playerTeam = <TeamComponent>player.getComponent('team')
const playerWeapon = <WeaponComponent>player.getComponent('weapon')

playerTeam.team
playerWeapon.use()