new Vue({
    el: '#app',
    data: {
        count: 30,
        imageURL: 'https://placekitten.com/300/300',
        html: '',
        x: 0,
        y: 0,
    }, methods: {
        capture(event) {
            this.x = event.clientX
            this.y = event.clientY
        }
    },
})