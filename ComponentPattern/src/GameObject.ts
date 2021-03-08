import Component from "./Component"

export default class GameObject
{
    _id: string
    components: Component[]

    constructor(component: Component[] | Component) {
        this._id = "azeazeaze-id"
        this.components = []

        this.addComponents(component)
    }

    get id(): string {
        return this._id
    }

    getComponent(key: string): Component {
        const foundComponent = this.components.filter(component => component.hasKey(key))

        return foundComponent[0]
    }

    addComponents(components: Component | Component[]): void {
        if (Array.isArray(components)) {
            components.forEach((component) => {
                this.components.push(component)
            })
        } else {
            this.components.push(components)
        }
    }

    serialize(): any {
        let snapshot = {
            id: this._id
        }

        this.components.forEach((component: Component) => {
            snapshot = {
                ...snapshot,
                ...component.serialize()
            }
        })

        return snapshot
    }
}