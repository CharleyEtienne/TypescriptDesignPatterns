import RoomFactory from "./RoomFactory";
import Room from "../Rooms/Room";
import {TypeSlots} from "../TypeSlots";
import RankedRoom from "../Rooms/RankedRoom";

export default class RankedRoomFactory implements RoomFactory
{
    createRoom(slots: TypeSlots): Room {
        return new RankedRoom(slots)
    }
}