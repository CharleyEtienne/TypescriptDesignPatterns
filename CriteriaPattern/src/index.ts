import Room from "./Room";
import RoomSoloTypeCriteria from "./Criterias/RoomSoloTypeCriteria";
import Criteria from "./Criteria";
import RoomRankedCriteria from "./Criterias/RoomRankedCriteria";
import RoomAdventureCriteria from "./Criterias/RoomAdventureCriteria";

let rooms = [
    new Room('Boom', 'Adventure', 'Solo', true),
    new Room('Bouma', 'Adventure', 'Multiplayer', true),
    new Room('Alkjnecjn', 'Adventure', 'Solo', true),
    new Room('Bayouba', 'Adventure', 'Multiplayer', false),
    new Room('boboana', 'Adventure', 'Solo', false),
    new Room('Ado', 'PvP', 'Multiplayer', true),
    new Room('Pnecta', 'PvP', 'Multiplayer', false)
]

function showArray(array: Array<Room>): void {
    array.forEach(room => {
        room.toString()
    })
}

// TODO put this in the room (getByCriteria)
function applyCriteria(array: Array<Criteria>): Array<Room>
{
    let filteredArrayWithCriterias = rooms

    array.forEach(criteria => {
        filteredArrayWithCriterias = criteria.meetCriteria(filteredArrayWithCriterias)
    })

    return filteredArrayWithCriterias
}

const soloCriteria = new RoomSoloTypeCriteria()
const rankedCriteria = new RoomRankedCriteria()
const adventureCriteria = new RoomAdventureCriteria()
// ... All the criterias you want

// You can apply here all the criterias you want in the array
showArray(applyCriteria([rankedCriteria, adventureCriteria]))