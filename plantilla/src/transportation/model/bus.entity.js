/**
 * @class Bus
 * @summary Entity representing a school bus
 */
export class Bus {
    constructor({ id, vehiclePlate, fuelTankType, districtId, totalCapacity }) {
        this.id = id
        this.vehiclePlate = vehiclePlate
        this.fuelTankType = fuelTankType
        this.districtId = districtId
        this.totalCapacity = totalCapacity
    }
}
