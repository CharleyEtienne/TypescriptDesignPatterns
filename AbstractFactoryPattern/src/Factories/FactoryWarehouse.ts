import RoomFactory from "./Room/RoomFactory";
import AdventureRoomFactory from "../Rooms/Factories/AdventureRoomFactory";
import RankedRoomFactory from "../Rooms/Factories/RankedRoomFactory";
import AdventureGameFactory from "../Games/Factories/AdventureGameFactory";
import RankedGameFactory from "../Games/Factories/RankedGameFactory";

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
        this.factoriesDictionary['Adventure'] = new AdventureRoomFactory(new AdventureGameFactory())
        this.factoriesDictionary['Ranked'] = new RankedRoomFactory(new RankedGameFactory())
    }
}