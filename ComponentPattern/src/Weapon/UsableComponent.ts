import Component from "../Component"

export default interface UsableComponent extends Component
{
    use(): string
}