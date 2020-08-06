import Room from "./Room";

export default class AdventureRoom extends Room
{
    private GameMode = 'Adventure'

    constructor(slots: number) {
        super(slots);
        console.log('New Adventure Room has been created !')
    }
}