use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Jimmy",
    email: "jimmy@jimmy.com",
    status: false
  },
  {
    name: "Kevin",
    email: "kevin@jimmy.com",
    status: true
  },
  {
    name: "Billy",
    email: "billy@jimmy.com",
    status: true
  }
])
