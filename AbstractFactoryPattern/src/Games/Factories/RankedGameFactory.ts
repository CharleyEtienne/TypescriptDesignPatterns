import GameFactory from "../../Factories/Game/GameFactory";

export default class RankedGameFactory implements GameFactory
{
    createGame(): string {
        return "Ranked Game !";
    }

}