import { IColour } from "./colour";

export interface IBulb {
    kelvin: number,
    intensity: number,
    macAddress: string,
    powerStatus: boolean,
    colour: IColour
}
