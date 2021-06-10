<template>
  <div id="home">
    <div id="title">
      <span>drawing stuff</span>
    </div>
    <div id="content">
      <Palette />
      <Canvas />
    </div>
  </div>
</template>

<script>
import Palette from "@/components/Palette";
import Canvas from "@/components/Canvas";

export default {
  name: "Home",
  components: {
    Palette,
    Canvas,
  },
};
</script>

<style>
#home {
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-rows: 7vh 93vh;
}
#title {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  font-weight: 700;
  font-size: 22px;
  color: #2c3e50;
  text-align: center;
}
#content {
  height: 100%;
  width: 100%;
  overflow: hidden;

  display: flex;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
