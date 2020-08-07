import RoomDAO from "./RoomDAO";
import Room from "../Model/Room";

export default class RoomAccessor implements RoomDAO
{
    protected rooms: Array<Room>

    constructor() {
        this.rooms = [];
    }

    createRoom(): Room {
        const newRoom: Room = new Room(this.generateRandomRoomId())
        this.rooms.push(newRoom)

        return newRoom
    }

    deleteRoomById(id: string): boolean {
        const index = this.rooms.indexOf(this.getRoomById(id));
        return this.rooms.splice(index, 1).length > 0
    }

    getAllRooms(): Array<Room> {
        return this.rooms
    }

    getRoomById(id: string): Room | undefined {
        return this.rooms.find(room => room.getId === id)
    }

    private generateRandomRoomId(): string
    {
        return String(Math.floor(Math.random() * Math.floor(99999999999)))
    }

}