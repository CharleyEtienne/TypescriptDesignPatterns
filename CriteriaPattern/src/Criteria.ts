import Room from "./Room";

export default interface Criteria
{
    meetCriteria(rooms: Array<Room>): Array<Room>
}