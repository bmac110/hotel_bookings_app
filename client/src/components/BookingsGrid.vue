<template lang="html">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <h2>Guest Name: {{booking.name}}</h2>
      <p>Email: {{booking.email}}</p>
      <p>Check-in Status: {{booking.status}}</p>

      <button @click = "handleClick(booking._id)">Delete Booking</button>
      <button @click = "handleCheckInClick()">Check-in Status</button>
    </div>
  </div>
</template>

<script>
import BookingsService from '@/services/BookingsService.js'
import { eventBus } from '../main.js';

export default {
  name: "bookings-grid",
  props: ["bookings"],
  methods: {
    handleClick(id) {
      BookingsService.deleteBooking(id)
      .then(() => {
        eventBus.$emit('booking-deleted', id)
      })
    },
    handleCheckInClick(id) {
      BookingsService.updateBooking(id)
      .then(() => {
        eventBus.$emit('booking-updated', id)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
