<template>
  <div class="loanUpdate">
    <h1>Update Loan</h1>
    <div class="input-block">
      <label>
        Id of loan to update:
        <input disabled name="loanId" type="number" v-model="selectedLoan.id" />
      </label>
    </div>
    <div class="input-block">
      <label>
        Loan Number:
        <input
          name="loanNumber"
          type="number"
          v-model.number="selectedLoan.number"
        />
      </label>
    </div>
    <div class="input-block">
      <label>
        Loan Amount:
        <input
          name="loanAmount"
          type="number"
          v-model.number="selectedLoan.amount"
        />
      </label>
    </div>
    <div class="input-block">
      <label>
        Loan Address:
        <input name="loanAmount" type="text" v-model="selectedLoan.address" />
      </label>
    </div>
    <div class="input-block">
      <label>
        Loan Type:
        <select v-model="selectedLoan.loanType">
          <option v-for="option in options">{{ option }}</option>
        </select>
      </label>
    </div>

    <ApolloMutation
      :mutation="updateLoanMutation"
      :variables="updateLoanMutationVars"
    >
      <button
        :disabled="!loanSelected"
        slot-scope="{ mutate }"
        class="updateBtn"
        @click="mutate"
      >
        Update Loan
      </button>
    </ApolloMutation>
  </div>
</template>

<script>
import {
  updateLoan,
  loanSelected,
  selectedLoan
} from "../apollo/queries.graphql";
export default {
  name: "updateLoan",
  data() {
    return {
      options: ["CONVENTIONAL", "FHA", "USDA", "VA"],
      updateLoan
    };
  },
  computed: {
    updateLoanMutationVars() {
      const { id, __typename, ...loan } = this.selectedLoan;
      return { id, loan };
    }
  },
  apollo: {
    loanSelected: {
      query: loanSelected
    },
    selectedLoan: {
      query: selectedLoan
    }
  }
};
</script>

<style scoped>
.loanUpdate {
  text-align: left;
}

.input-block {
  margin: 10px;
}

.updateBtn {
  padding: 10px;
  border-radius: 20px;
  background-color: #42b883;
  color: white;
}

button:focus {
  outline: none;
}

button:disabled {
  background-color: #c4c4c4;
  color: #ffffff;
}
</style>
