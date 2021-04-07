import { reactive } from 'vue'

const store = {
  debug: true,

  state: reactive({
    chosenColor: null
  }),

  chooseColor(color) {
    if (this.debug) {
      console.log('chosen color: ', color)
    }

    this.state.chosenColor = color
  },
}
export default store