import Room from "../Model/Room";

export default interface RoomDAO {
    createRoom(): Room
    getAllRooms(): Array<Room>
    getRoomById(id: string): Room | undefined
    deleteRoomById(id: string): boolean
}