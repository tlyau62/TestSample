<template>
  <div class="template">
    <p>Hello Issac, {{msg}}</p>
    <p>{{config}}</p>
    <p>You can use axios to do rest call</p>
    <ul>
      <li v-for="member in members" :key="member.id">{{member.fullName}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["config"],
  data() {
    return {
      msg: "world",
      members: []
    };
  },
  created() {
    axios.get("/api/members?page=0&size=10").then(({ data }) => {
      this.members = data.content;
    });
  }
};
</script>

<style scoped>
.template {
  background-color: cadetblue;
}
</style>