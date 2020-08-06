import Room from "./Room";

export default class RankedRoom extends Room
{
    private GameMode = 'Ranked'

    constructor(slots: number) {
        super(slots);
        console.log('New Ranked Room has been created !')
    }
}