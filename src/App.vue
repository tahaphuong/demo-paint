<template>
  <Home v-if="loggedIn" />
  <Login v-if="!loggedIn" :submitLogin="submitLogin"/>

</template>

<script>
import Home from '@/pages/Home'
import Login from '@/pages/Login'

export default {
  name: 'App',
  components: {
    Home,
    Login
  },
  data() {
    return {
      loggedIn: false,
      userData: null
    }
  },
  methods: {
    submitLogin() {
      this.loggedIn = true
    }
  }
}
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  font-family: consolas, monospace;
}

input {
  font-family: consolas, monospace;
}

</style>
