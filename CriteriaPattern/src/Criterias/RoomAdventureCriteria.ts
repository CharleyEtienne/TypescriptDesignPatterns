import Criteria from "../Criteria";
import Room from "../Room";

export default class RoomAdventureCriteria implements Criteria
{
    meetCriteria(rooms: Array<Room>): Array<Room> {
        return rooms.filter(room => room.getMode === 'Adventure')
    }
}