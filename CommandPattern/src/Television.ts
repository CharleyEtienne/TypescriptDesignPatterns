export default class Television
{
    private turnedOn: boolean = false
    private volume: number = 10

    public turnOn(): void {
        if (this.turnedOn)
            console.log('TV is already ON')
        else {
            this.turnedOn = true
            console.log('TV is now ON !')
        }

    }

    public turnOff(): void {
        if (!this.turnedOn)
            console.log('TV is already OFF')
        else {
            this.turnedOn = false
            console.log('TV is now OFF !')
        }
    }

    public volumeUp(): void {
        if (this.turnedOn) {
            this.volume++
            console.log('TV volume +1 [ ' + this.volume + '/100 ] !')
        } else
            console.log('TV is currently OFF !')

    }

    public volumeDown(): void {
        if (this.turnedOn) {
            this.volume--
            console.log('TV volume -1 [ ' + this.volume + '/100 ] !')
        } else
            console.log('TV is currently OFF !')
    }
}
