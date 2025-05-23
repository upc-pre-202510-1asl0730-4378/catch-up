import httpInstance from '../../shared/services/http.instance.js'

/**
 * @class AssignmentService
 * @summary Service class to interact with assignment resources from the API
 */
export class AssignmentService {
    resourceEndpoint = '/assignments'

    async getAll() {
        const response = await httpInstance.get(this.resourceEndpoint)
        return response.data
    }

    async create(resource) {
        const response = await httpInstance.post(this.resourceEndpoint, resource)
        return response.data
    }
}
