export type House = {
    id: number,
    name: string,
    city: string,
    state: string,
    photo: string,
    availableUnits: number,
    wifi: boolean,
    laundry: boolean,
    coords: {
        lat: number,
        long:number
    }
    valoration: number  
}