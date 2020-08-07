import RoomFactory from "../../Factories/Room/RoomFactory";
import Room from "../Room";
import AdventureRoom from "../AdventureRoom";
import {TypeSlots} from "../../TypeSlots";
import GameFactory from "../../Factories/Game/GameFactory";

export default class AdventureRoomFactory implements RoomFactory
{
    private gameFactory: GameFactory

    constructor(gameFactory: GameFactory) {
        this.gameFactory = gameFactory
        console.log('Nouvelle facto adventure')
    }

    createRoom(slots: TypeSlots): Room {
        return new AdventureRoom(slots, this.gameFactory.createGame())
    }
}