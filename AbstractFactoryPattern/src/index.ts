import {TypeSlots} from "./TypeSlots";
import FactoryWarehouse from "./Factories/FactoryWarehouse";

// TODO make FactoryWarehouse a singleton
const factoryWarehouse: FactoryWarehouse = new FactoryWarehouse()
const player = 'Po1sChich3'

function CreateRoomForMode(mode: string, type: TypeSlots, factories: FactoryWarehouse, player = null)
{
    console.log('Choosing mode : ' + mode + ' with ' + type + ' slots')
    const factory = factoryWarehouse.getFactoryForMode(mode)
    const room = factory.createRoom(type)
    if (null !== player) room.join(player)
    room.toString()
    console.log('')
}

CreateRoomForMode('Adventure', TypeSlots.SOLO, factoryWarehouse, player)
CreateRoomForMode('Ranked', TypeSlots.MULTI, factoryWarehouse)
CreateRoomForMode('Adventure', TypeSlots.MULTI, factoryWarehouse)