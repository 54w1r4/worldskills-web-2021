new Vue({
    el: '#app',
    data: {
        count: 30,
        imageURL: 'https://placekitten.com/300/300',
        html: '',
        x: 0,
        y: 0,
        firstName: '',
        lastName: '',
        active: 1,
        fruits: ['apple', 'banana', 'orange', 'peach', 'lemon']
    }, methods: {
        capture(event) {
            this.x = event.clientX
            this.y = event.clientY
        }
    }, computed: {
      fullName() {
          return this.firstName + ' ' + this.lastName
      }
    },
})