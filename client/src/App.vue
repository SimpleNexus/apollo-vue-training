<template>
  <div id="app">
    <Loans name="List 1" />
    <Loans name="List 2" />
    <UpdateLoan />
  </div>
</template>

<script>
import Loans from "./components/Loans.vue";
import UpdateLoan from "./components/updateLoan";

export default {
  name: "app",
  components: {
    Loans,
    UpdateLoan
  }
};
</script>

<style>
#app {
  display: flex;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px;
}
</style>
