import TurnOnTelevisionCommand from "./Commands/TurnOnTelevisionCommand";
import TurnOffTelevisionCommand from "./Commands/TurnOffTelevisionCommand";
import VolumeUpTelevisionCommand from "./Commands/VolumeUpTelevisionCommand";
import Television from "./Television";
import Telecommande from "./Telecommande";

const television: Television = new Television() // On créer notre Television (marque quelconque)

// On va créer ici notre télécommande, et lui associer une Commands à chaque boutton
// Toutes les commandes sont génériques, et pourraient marcher pour n'importe quel téléviseur
// Donc on donne a notre Commands le téléviseur avec lequel interragir
const telecommandeDeLaTelevision: Telecommande =
    new Telecommande(
        new TurnOnTelevisionCommand(television),
        new TurnOffTelevisionCommand(television),
        new VolumeUpTelevisionCommand(television)
    )

// Une fois le tout associé, on peut se servir tranquillement de notre telecommande sur notre télé !
telecommandeDeLaTelevision.pressPowerOn()
telecommandeDeLaTelevision.pressVolumeUp()
telecommandeDeLaTelevision.pressVolumeUp()

// pour tester
telecommandeDeLaTelevision.pressPowerOn()
telecommandeDeLaTelevision.pressPowerOff()
telecommandeDeLaTelevision.pressVolumeUp()