import RoomFactory from "./RoomFactory";
import Room from "../Rooms/Room";
import AdventureRoom from "../Rooms/AdventureRoom";
import {TypeSlots} from "../TypeSlots";

export default class AdventureRoomFactory implements RoomFactory
{
    createRoom(slots: TypeSlots): Room {
        return new AdventureRoom(slots)
    }
}