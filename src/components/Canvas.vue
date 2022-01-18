<template>
  <canvas 
    id="canvas"
    height="350"
    width="750"
  />
</template>

<script>
import store from '../store.js'

const WEIGHT = 1

export default {
  name: 'Canvas',
  mounted() {
    const canvas = document.getElementById('canvas');
    const bounds = canvas.getBoundingClientRect();
    const canvasContext = canvas.getContext('2d');
    const mouse = {x:0, y:0, lastX: null, lastY: null}
    let drawing = false

    function draw() {
      if (mouse.lastX == null && mouse.lastY == null) {
        canvasContext.beginPath()
        canvasContext.arc(mouse.x, mouse.y, WEIGHT/1.7, 0 , 2*Math.PI)
        canvasContext.fillStyle = store.state.chosenColor
        canvasContext.fill()

        mouse.lastX = mouse.x
        mouse.lastY = mouse.y
        return
      }

      canvasContext.beginPath()
      canvasContext.moveTo(mouse.lastX, mouse.lastY)
      canvasContext.lineTo(mouse.x, mouse.y)
      canvasContext.lineWidth = WEIGHT
      canvasContext.strokeStyle = store.state.chosenColor
      canvasContext.stroke()

      mouse.lastX = mouse.x
      mouse.lastY = mouse.y
    }

    function setMousePosition(e) {
      mouse.x = e.pageX - bounds.left - scrollX;
      mouse.y = e.pageY - bounds.top - scrollY;

      mouse.x /= bounds.width; 
      mouse.y /= bounds.height;

      mouse.x *= canvas.width;
      mouse.y *= canvas.height;
    } 

    canvas.onmousedown = (e) => {
      if (!store.state.chosenColor) 
        return
      drawing = true
      setMousePosition(e)
      draw()
    }

    canvas.onmousemove = (e) => {
      if(!drawing)
        return
      setMousePosition(e)
      draw()
    }

    let stopDrawing = () => {
      drawing = false
      mouse.lastX = null
      mouse.lastY = null
    }
    canvas.onmouseout = stopDrawing
    canvas.onmouseup = stopDrawing
  }
}
</script>

<style>
  #canvas {
    margin: 20px 5px;
    border: 0.5px gray solid;
  }
</style>