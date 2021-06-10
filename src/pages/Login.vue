<template>
  <div id="login-page">
    <div id="login-title">Log in to draw!</div>
    <form id="login-form" v-on:submit.prevent="submitLogin">
      <input type="email" v-model="email" placeholder="Your email" />
      <input type="password" v-model="password" placeholder="Your password" />

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    submitLogin: {
      type: Function,
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
#login-page {
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
}
#login-title {
  font-size: 30px;
  font-weight: 600;

  margin: 40px 0px;
}
#login-form {
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: white;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

#login-form input {
  width: 250px;
  margin: 10px 0px;

  padding: 10px 5px;
  border: 0.5px solid gray;
  border-radius: 4px;

  font-size: 16px;
}
</style>