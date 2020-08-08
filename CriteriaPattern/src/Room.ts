export default class Room {
    private mode: string
    private type: string
    private ranked: boolean
    private name: string

    get getName(): string {
        return this.name
    }

    get getMode(): string {
        return this.mode
    }

    get getType(): string {
        return this.type
    }

    get getRanked(): boolean {
        return this.ranked
    }

    public toString(): void
    {
        console.log('Room ' + this.name + ': ' + this.mode + ' ' + this.type + ' ' + this.ranked)
    }

    constructor(name: string, mode: string, type: string, ranked: boolean) {
        this.name = name;
        this.mode = mode;
        this.type = type;
        this.ranked = ranked;
    }
}