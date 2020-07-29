import Command from "./Commands/Command";

export default class Telecommande
{
    private powerOn: Command
    private powerOff: Command
    private volumeUp: Command

    constructor(powerOn: Command, powerOff: Command, volumeUp: Command) {
        this.powerOn = powerOn
        this.powerOff = powerOff
        this.volumeUp = volumeUp
    }

    public pressPowerOn(): void {
        this.powerOn.execute()
    }

    public pressPowerOff(): void {
        this.powerOff.execute()
    }

    public pressVolumeUp(): void {
        this.volumeUp.execute()
    }
}