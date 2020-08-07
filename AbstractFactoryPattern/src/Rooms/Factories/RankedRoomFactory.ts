import RoomFactory from "../../Factories/Room/RoomFactory";
import Room from "../Room";
import {TypeSlots} from "../../TypeSlots";
import RankedRoom from "../RankedRoom";
import GameFactory from "../../Factories/Game/GameFactory";

export default class RankedRoomFactory implements RoomFactory
{
    private gameFactory: GameFactory

    constructor(gameFactory: GameFactory) {
        this.gameFactory = gameFactory
        console.log('Nouvelle facto Ranked')
    }

    createRoom(slots: TypeSlots): Room {
        return new RankedRoom(slots, this.gameFactory.createGame())
    }
}