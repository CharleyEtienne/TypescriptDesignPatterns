import Component from "./Component"

export default class TeamComponent implements Component
{
    private _teamName: string

    constructor(team: string) {
        this._teamName = team
    }

    get team(): string {
        return this._teamName
    }

    hasKey(value: string): boolean {
        return 'team' === value
    }

    serialize(): any {
        return {
            team: this._teamName
        }
    }
}