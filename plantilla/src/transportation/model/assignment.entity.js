/**
 * @class Assignment
 * @summary Entity representing a student-to-bus assignment
 */
export class Assignment {
    constructor({ id, studentId, busId, assignedAt }) {
        this.id = id
        this.studentId = studentId
        this.busId = busId
        this.assignedAt = assignedAt
    }
}
