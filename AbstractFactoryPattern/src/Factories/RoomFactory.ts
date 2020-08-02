import Room from "../Rooms/Room";
import {TypeSlots} from "../TypeSlots";

export default interface RoomFactory
{
    createRoom(slots: TypeSlots): Room
}