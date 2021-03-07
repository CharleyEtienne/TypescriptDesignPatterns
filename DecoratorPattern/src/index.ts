import {Mozzarella, Oignons, Pizza} from "./Pizza"

const pizzaMozzaOignons = new Mozzarella(new Oignons((new Pizza())))

console.log(pizzaMozzaOignons.getType())