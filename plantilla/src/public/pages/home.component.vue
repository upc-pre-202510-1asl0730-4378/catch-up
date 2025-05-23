<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ $t('home.title') }}</h2>
    <p class="mb-6">{{ $t('home.welcome') }}</p>

    <h3 class="text-xl font-semibold mb-2">{{ $t('home.buses') }}</h3>

    <pv-data-table :value="buses" paginator :rows="5" sortMode="multiple" dataKey="id" stripedRows responsiveLayout="scroll" aria-label="Buses table">
      <pv-column field="id" header="ID" sortable />
      <pv-column field="vehiclePlate" header="Vehicle Plate" sortable />
      <pv-column field="fuelTankType" header="Fuel Tank" sortable />
      <pv-column field="districtId" header="District" sortable />
      <pv-column field="totalCapacity" header="Total Capacity" sortable />
      <pv-column field="availableSeats" header="Available Seats" sortable />
    </pv-data-table>
  </div>
</template>

<script>
import { BusService } from '../../transportation/services/bus.service.js'
import { AssignmentService } from '../../transportation/services/assignment.service.js'

export default {
  name: 'HomeComponent',
  data() {
    return {
      buses: []
    }
  },
  async mounted() {
    const busService = new BusService()
    const assignmentService = new AssignmentService()

    const [busesData, assignmentsData] = await Promise.all([
      busService.getAll(),
      assignmentService.getAll()
    ])

    this.buses = busesData.map(bus => {
      const assigned = assignmentsData.filter(a => a.busId === bus.id)
      return {
        ...bus,
        availableSeats: bus.totalCapacity - assigned.length
      }
    })
  }
}
</script>
