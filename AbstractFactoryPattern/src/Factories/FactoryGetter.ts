import RoomFactory from "./RoomFactory";
import AdventureRoomFactory from "./AdventureRoomFactory";

export default class FactoryGetter
{
    private factoriesDictionnary: Array<(data:string) => RoomFactory> = []

    constructor()
    {
        this.factoriesDictionnary['Adventure'] = new AdventureRoomFactory()
    }

    public getFactoryForMode(gamemode: string): RoomFactory
    {
        return this.factoriesDictionnary[gamemode]
    }
}