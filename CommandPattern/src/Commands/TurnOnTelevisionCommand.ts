import Television from "../Television";
import Command from "./Command";

export default class TurnOnTelevisionCommand implements Command
{
    private television: Television;

    constructor(television: Television) {
        this.television = television;
    }

    execute(): void {
        this.television.turnOn()
    }
}
