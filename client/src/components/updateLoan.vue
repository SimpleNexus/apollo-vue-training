<template>
  <div class="loanUpdate">
    <h1>Update Loan</h1>
    <div class="input-block">
      <label>
        Id of loan to update:
        <input name="loanId" type="number" v-model="id" />
      </label>
    </div>
    <div class="input-block">
      <label>
        Loan Number:
        <input name="loanNumber" type="number" v-model="number" />
      </label>
    </div>
    <div class="input-block">
      <label>
        Loan Amount:
        <input name="loanAmount" type="number" v-model="amount" />
      </label>
    </div>
    <div class="input-block">
      <label>
        Loan Address:
        <input name="loanAmount" type="text" v-model="address" />
      </label>
    </div>
    <div class="input-block">
      <label>
        Loan Type:
        <select v-model="loanType">
          <option v-for="option in options">{{ option }}</option>
        </select>
      </label>
    </div>
    <button class="updateBtn">Update Loan</button>
  </div>
</template>

<script>
export default {
  name: "updateLoan",
  data() {
    return {
      id: 0,
      amount: 0,
      number: 0,
      address: "",
      type: "",
      options: ["CONVENTIONAL", "FHA", "USDA", "VA"]
    };
  }
};
</script>

<style scoped>
.loanUpdate {
  text-align: left;
  position: fixed;
  right: 65px;
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
</style>
