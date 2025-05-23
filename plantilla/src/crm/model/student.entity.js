/**
 * @class Student
 * @summary Entity representing a student
 */
export class Student {
    constructor({ id, firstName, lastName, districtId, parentId }) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.districtId = districtId
        this.parentId = parentId
    }
}
