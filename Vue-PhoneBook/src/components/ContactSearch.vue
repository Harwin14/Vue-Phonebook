<script setup>
import { ref } from "vue";

const emit = defineEmits(["searchContact"]);

const name = ref("");
const phone = ref("");

function searchItem() {
  emit("searchContact", { name: name.value, phone: phone.value });
}
function reset() {
  emit("searchContact", { name: "", phone: "" });
  name.value = "";
  phone.value = "";
}
</script>

<template>
  <div class="card bold">
    <div class="card-header">
      <h3>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> Search Form
      </h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="searchItem">
        <div class="row mb-3">
          <label for="name" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="name" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="phone" class="col-sm-2 col-form-label">Phone</label>
          <div class="col-sm-10">
            <input type="tel" class="form-control" v-model="phone" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary font-btn bold">Search</button>
        <button type="button" class="btn btn-warning font-btn bold" @click="reset"><font-awesome-icon icon="fa-solid fa-rotate-left" />Reset</button>
      </form>
    </div>
  </div>
</template>
