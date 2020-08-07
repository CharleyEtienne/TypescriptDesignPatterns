import RoomAccessor from "./DAO/RoomAccessor";
import Room from "./Model/Room";

const RA: RoomAccessor = new RoomAccessor()
let roomsIds: Array<string> = [] // For Testing purposes

displayRooms(RA.getAllRooms())
console.log('Adds a new room')
RA.createRoom()
displayRooms(RA.getAllRooms())
saveRoomIds(RA.getAllRooms())
console.log('ROOM SELECTED ID : ' + RA.getRoomById(roomsIds[0]).getId)
console.log('try to delete this room : ' + RA.deleteRoomById(roomsIds[0]))
displayRooms(RA.getAllRooms())

function displayRooms(rooms: Array<Room>)
{
    console.log('Rooms List ---')
    rooms.forEach(room => {
        console.log('Room : ' + room.getId)
    })
    console.log('')
}

// Just to test the getRoomById function
function saveRoomIds(rooms: Array<Room>)
{
    rooms.forEach(room => {
        roomsIds.push(room.getId)
    })
}