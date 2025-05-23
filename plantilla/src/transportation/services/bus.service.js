import httpInstance from '../../shared/services/http.instance.js'

/**
 * @class BusService
 * @summary Service class to interact with bus resources from the API
 */
export class BusService {
    resourceEndpoint = '/buses'

    async getAll() {
        const response = await httpInstance.get(this.resourceEndpoint)
        return response.data
    }
}
