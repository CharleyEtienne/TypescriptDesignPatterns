import Component from "./Component"

export default class TeamComponent implements Component
{
    private _teamName: string

    constructor(team: string) {
        this._teamName = team
    }

    get team(): string {
        console.log(this._teamName)
        return this._teamName
    }

    getName(): string {
        return 'team'
    }
}