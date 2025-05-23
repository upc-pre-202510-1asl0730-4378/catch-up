<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ $t('assignments.title') }}</h2>

    <div class="card">
      <h3 class="text-xl font-semibold mb-2">{{ $t('assignments.new') }}</h3>

      <div class="flex flex-col gap-3 max-w-md">
        <pv-input-text v-model="studentId" :placeholder="$t('assignments.studentId')" aria-label="Student ID" />
        <pv-input-text v-model="busId" :placeholder="$t('assignments.busId')" aria-label="Bus ID" />
        <pv-button label="Assign" @click="handleAssign" />
        <p v-if="message" class="text-red-500 mt-2">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { BusService } from '../services/bus.service.js'
import { StudentService } from '../../crm/services/student.service.js'
import { AssignmentService } from '../services/assignment.service.js'

export default {
  name: 'AssignmentsComponent',
  data() {
    return {
      studentId: '',
      busId: '',
      message: ''
    }
  },
  methods: {
    async handleAssign() {
      this.message = ''

      const studentService = new StudentService()
      const busService = new BusService()
      const assignmentService = new AssignmentService()

      const [students, buses, assignments] = await Promise.all([
        studentService.getAll(),
        busService.getAll(),
        assignmentService.getAll()
      ])

      const student = students.find(s => s.id == this.studentId)
      if (!student) {
        this.message = this.$t('assignments.invalidStudent')
        return
      }

      const bus = buses.find(b => b.id == this.busId)
      if (!bus) {
        this.message = this.$t('assignments.invalidBus')
        return
      }

      const alreadyAssigned = assignments.some(a => a.studentId == student.id)
      if (alreadyAssigned) {
        this.message = this.$t('assignments.alreadyAssigned')
        return
      }

      const siblingAssignment = assignments.find(a => {
        const sibling = students.find(s => s.id === a.studentId)
        return sibling?.parentId === student.parentId
      })

      const finalBusId = siblingAssignment ? siblingAssignment.busId : bus.id

      if (student.districtId !== bus.districtId && !siblingAssignment) {
        this.message = this.$t('assignments.districtMismatch')
        return
      }

      await assignmentService.create({
        studentId: student.id,
        busId: finalBusId,
        assignedAt: new Date().toISOString()
      })

      this.$toast.add({ severity: 'success', summary: 'Assigned', detail: 'Student assigned successfully', life: 3000 })
      this.studentId = ''
      this.busId = ''
    }
  }
}
</script>
