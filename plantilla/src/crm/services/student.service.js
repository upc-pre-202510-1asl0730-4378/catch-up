import httpInstance from '../../shared/services/http.instance.js'

/**
 * @class StudentService
 * @summary Service class to interact with student resources from the API
 */
export class StudentService {
    resourceEndpoint = '/students'

    async getAll() {
        const response = await httpInstance.get(this.resourceEndpoint)
        return response.data
    }
}
