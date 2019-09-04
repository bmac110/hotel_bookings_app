<template lang="html">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <h2>{{booking.name}}</h2>
      <p>{{booking.email}}</p>
      <p>{{booking.status}}</p>

      <button @click = "handleClick(booking._id)">Delete Booking</button>
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
