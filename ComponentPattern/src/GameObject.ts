import Component from "./Component"

export default class GameObject
{
    _id: string
    components: Component[]

    constructor(components: Component[] = []) {
        this._id = "azeazeaze-id"
        this.components = components
    }

    get id(): string {
        return this._id
    }

    getComponent(name: string): Component {
        const foundComponent = this.components.filter(component => component.getName() === name)

        return foundComponent[0]
    }

    addComponents(components: Component[]): void {
        components.forEach((component) => {
            this.components.push(component)
        })
    }
}