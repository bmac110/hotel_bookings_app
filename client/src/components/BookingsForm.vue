<template lang="html">
  <form id="bookings-form" v-on:submit="addBooking" method="post">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input required type="text" id="name" v-model="name" />
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input required type="text" id="email" v-model="email">
    </div>
    <div class="formWrap">
      <label for="status">Checked in?</label>
      <input type="checkbox" id="status" v-model="status">
    </div>

    <input type="submit" name="Submit" id="submit" />
  </form>
</template>

<script>
import BookingsService from '@/services/BookingsService.js'
import { eventBus } from '../main.js';

export default {
  name: "bookings-form",
  data() {
    return {
      name: "",
      email: "",
      status: ""
    }
  },
  methods: {
    addBooking(b) {
      b.preventDefault()
      const booking = {
        name: this.name,
        email: this.email,
        status: this.status
      }
      BookingsService.postBooking(booking)
      .then( res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
