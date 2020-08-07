import GameFactory from "../../Factories/Game/GameFactory";

export default class AdventureGameFactory implements GameFactory
{
    createGame(): string {
        return "Adventure Game !";
    }

}