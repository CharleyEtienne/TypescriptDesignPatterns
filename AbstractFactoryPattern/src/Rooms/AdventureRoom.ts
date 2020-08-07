import Room from "./Room";

export default class AdventureRoom extends Room
{
    private GameMode = 'Adventure'

    constructor(slots: number, gameInstance: string) {
        super(slots, gameInstance);
        console.log('New Adventure Room has been created !')
    }
}