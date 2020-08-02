export default abstract class Room
{
    protected socketGroup: Array<string>
    protected slots: number

    protected constructor(slots: number) {
        this.slots = slots
    }

    public join(socket: string): void {
        this.socketGroup.push(socket)
    }

    public abstract toString(): void
}
