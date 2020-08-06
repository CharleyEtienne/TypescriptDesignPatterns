import RoomFactory from "./RoomFactory";
import AdventureRoomFactory from "./AdventureRoomFactory";
import RankedRoomFactory from "./RankedRoomFactory";

export default class FactoryWarehouse
{
    private factoriesDictionary: Array<(data:string) => RoomFactory> = []

    constructor()
    {
        this.fillFactoriesDictionary()
    }

    public getFactoryForMode(gameMode: string): RoomFactory
    {
        return this.factoriesDictionary[gameMode]
    }

    private fillFactoriesDictionary()
    {
        this.factoriesDictionary['Adventure'] = new AdventureRoomFactory()
        this.factoriesDictionary['Ranked'] = new RankedRoomFactory()
    }
}