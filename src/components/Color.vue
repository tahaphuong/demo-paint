<template>
    <div class="color" @click="chooseColor" 
    :style="{backgroundColor: color, borderColor: chosen ? '#C4C4C4' : 'transparent'}"></div>
</template>

<script>
import store from '../store.js'

export default {
  name: 'Color',
  props: {
    color: String,
    chosen: Boolean
  },
  methods: {
    chooseColor() {
      store.chooseColor(this.color)
    }
  }
}
</script>

<style>
    .color {
      height: 65px;
      width: 65px;
      background: #c4c4c4;
      border-radius: 15px;
      border: 3px transparent solid;
    }

    .color:hover {
        cursor: pointer;
        opacity: 0.5;
      } 
</style>