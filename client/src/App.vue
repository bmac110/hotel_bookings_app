<template lang="html">
<div id="app">
  <h1>Hotel Bookings</h1>
  <bookings-form />
  <bookings-grid :bookings="bookings" />
</div>
</template>

<script>
import BookingsForm from './components/BookingsForm.vue';
import BookingsGrid from './components/BookingsGrid.vue';
import BookingsService from '@/services/BookingsService.js'
import { eventBus } from './main.js';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    BookingsForm,
    BookingsGrid
  },
  mounted() {
    this.fetchData();

    BookingsService.getBookings()
    .then(bookings => this.bookings = bookings);

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/api/bookings")
      .then(res => res.json())
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>

body {
  background-color: #B0E0E6;
  font-family: 'Kanit', sans-serif;
}

#id {
  display: flex;
}

h1 {
  text-decoration: underline;
  text-align: center;
}

</style>
