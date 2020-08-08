import Criteria from "../Criteria";
import Room from "../Room";

export default class RoomSoloTypeCriteria implements Criteria
{
    meetCriteria(rooms: Array<Room>): Array<Room> {
        return rooms.filter(room => room.getType === 'Solo')
    }
}