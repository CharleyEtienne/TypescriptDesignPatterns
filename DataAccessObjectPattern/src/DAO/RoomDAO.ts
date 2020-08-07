import Room from "../Model/Room";

export default interface RoomDAO {
    createRoom(): Room
    getAllRooms(): Array<Room>
    getRoomById(id: string): Room
    deleteRoomById(id: string): boolean
}