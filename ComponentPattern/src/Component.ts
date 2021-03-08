export default interface Component
{
    hasKey(key: string): boolean
    serialize(): any
}