import Television from "../Television";
import Command from "./Command";

export default class VolumeUpTelevisionCommand implements Command
{
    private television: Television;

    constructor(television: Television) {
        this.television = television;
    }

    execute(): void {
        this.television.volumeUp()
    }
}
