export default class Room
{
    private readonly id: string

    get getId(): string {
        return this.id
    }

    constructor(id: string)
    {
        this.id = id;
    }
}