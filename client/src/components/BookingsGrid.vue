<template lang="html">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <h2>Guest Name: {{booking.name}}</h2>
      <p>Email: {{booking.email}}</p>
      <p>Check-in Status: {{booking.status}}</p>

      <button @click = "handleClick(booking._id)">Delete Booking</button>
      <button  v-if="!booking.status" @click = "handleCheckInClick(booking)">Check-in </button>
      <button v-if="booking.status" @click = "handleCheckInClick(booking)">Check out</button>
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
    handleCheckInClick(booking) {
      const bookingID = booking._id;
      booking.status = !booking.status
      const bookingStatus = {status: booking.status};
      BookingsService.updateBooking(bookingID, bookingStatus)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
