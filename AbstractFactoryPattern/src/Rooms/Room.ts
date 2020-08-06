export default abstract class Room
{
    protected socketGroup: Array<string> = []
    protected slots: number
    protected mode: string = ''

    protected constructor(slots: number) {
        this.slots = slots
    }

    public join(socket: string): void {
        this.socketGroup.push(socket)
    }

    public toString(): void
    {
        console.log('Room with ' + this.slots + ' slots')
        if (this.socketGroup.length > 0)
        {
            console.log('Contains player.s : ')
            this.socketGroup.forEach( player => {
                console.log(player)
            })
        }
    }
}
