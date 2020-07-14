<template>
  <div class="template">
    <p>Hello David, {{msg}}</p>
    <p>{{config}}</p>
    <p>You can directly use vuerouter to navigate around.</p>
    <p>Let's click the following link to go to homepage</p>
    <router-link :to="{name: 'Home'}">Home</router-link>
  </div>
</template>

<script>
export default {
  props: ["config"],
  data() {
    return {
      msg: "world"
    };
  }
};
</script>

<style scoped>
.template {
  background-color: cadetblue;
}
</style>