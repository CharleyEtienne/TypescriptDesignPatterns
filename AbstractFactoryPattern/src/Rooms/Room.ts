import GameFactory from "../Factories/Game/GameFactory";

export default abstract class Room
{
    protected socketGroup: Array<string> = []
    protected slots: number
    protected gameInstance: string

    protected constructor(slots: number, gameInstance: string) {
        this.slots = slots
        this.gameInstance = gameInstance
    }

    public join(socket: string): void {
        this.socketGroup.push(socket)
    }

    public toString(): void
    {
        console.log('Room with ' + this.slots + ' slots')
        console.log('Contains game instance : ' + this.gameInstance)
        if (this.socketGroup.length > 0)
        {
            console.log('Contains player.s : ')
            this.socketGroup.forEach( player => {
                console.log(player)
            })
        }
    }
}
