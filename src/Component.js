export default {
  data() {
    return {
      message: 'Hello my example',
      count: 0
    }
  },
  template: `
    <div>
      <h1>{{message}}</h1>
      <div>
        counter: <button @click="count++">{{ count }}</button>
      </div>
    </div>
  `
}
