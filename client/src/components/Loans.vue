<template>
  <div class="loans">
    <h1>{{ name }}</h1>
    <div class="los" v-for="lo in loanOfficers" :key="lo.name">
      <h2>{{ lo.name }}</h2>
      <h3>App Users</h3>
      <div v-for="au in lo.appUsers" :key="au.name">
        <h4>{{ au.name }}</h4>
        <h5>Loans</h5>
        <div v-for="loan in au.loans" :key="loan.id">
          <div>Id: {{ loan.id }}</div>
          <div>Number: {{ loan.number }}</div>
          <div>Amount: {{ loan.amount }}</div>
          <div>Address: {{ loan.address }}</div>
          <div>Type: {{ loan.loanType }}</div>
          <ApolloMutation :mutation="selectLoanMutation" :variables="{ loan }">
            <button slot-scope="{ mutate }" class="selectBtn" @click="mutate">
              Select
            </button>
          </ApolloMutation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { selectLoanMutation, loanOfficers } from "../apollo/queries.graphql";
export default {
  name: "HelloWorld",
  props: {
    name: String
  },
  data() {
    return {
      selectLoanMutation
    };
  },
  apollo: {
    loanOfficers: {
      query: loanOfficers
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.loans {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.los {
}

.selectBtn {
  background-color: #42b883;
  color: white;
  border-radius: 20px;
}

button:focus {
  outline: none;
}
</style>
