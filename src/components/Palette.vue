<template>
  <div id="palette">
    <Color v-for="(c, i) in listColors" :color="c" :key="i"
      :chosen="
        sharedState.chosenColor != null && 
        sharedState.chosenColor.toUpperCase() == c.toUpperCase()
      "
    />
    <button id="clear-btn" type="button" @click="clearAll">clear all</button>
    <button id="save-btn" type="button" @click="downloadPic">Download ur pic!</button>

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
  },
  methods: {
    clearAll() {
      const canvas = document.getElementById('canvas')
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    },
    downloadPic() {
      var link = document.createElement('a');
      link.download = 'masterpice.png';
      link.href = document.getElementById('canvas').toDataURL()
      link.click();
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