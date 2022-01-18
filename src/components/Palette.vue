<template>
  <div id="palette">
    <Color v-for="(c, i) in listColors" :color="c" :key="i"
      :chosen="
        sharedState.chosenColor != null && 
        sharedState.chosenColor.toUpperCase() == c.toUpperCase()
      "
    />
  </div>
</template>
<script>
import Color from './Color.vue'
import store from '../store.js'

export default {
  name: 'Palette',
  components: {
    Color
  },
  data() {
    return {
      listColors: ['#FF9AA2', '#FFDAC1', '#F1E3AD', '#E2F0CB', '#B5EAD7', '#C7CEEA'],
      sharedState: store.state
    }
  }
}
</script>

<style>
  #palette {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    margin: 0 20px;

  }
  
</style>