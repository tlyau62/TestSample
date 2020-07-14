<template>
  <div class="template">
    <p>Hello Issac, {{msg}}</p>
    <p>{{config}}</p>
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