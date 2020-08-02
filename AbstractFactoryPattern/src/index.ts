import {TypeSlots} from "./TypeSlots";
import RoomFactory from "./Factories/RoomFactory";
import FactoryGetter from "./Factories/FactoryGetter";
import Room from "./Rooms/Room";

// Solo adventure
console.log('choosing Solo Adventure Game :')
const type: TypeSlots = TypeSlots.SOLO
const mode = 'Adventure'

// TODO make FactoryGetter a singleton
const factoryGetter: FactoryGetter = new FactoryGetter()
// Gets the good Room factory
const factory: RoomFactory = factoryGetter.getFactoryForMode(mode)
// Creates the room
const room: Room = factory.createRoom(type)
// Display Room properties
room.toString()

// Multi Adventure
console.log('choosing Multi Adventure Game :')
const otherType: TypeSlots = TypeSlots.MULTI

// Creates the room
const otherRoom: Room = factory.createRoom(otherType)
// Display Room properties
otherRoom.toString()