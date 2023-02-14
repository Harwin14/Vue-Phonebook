<script setup>
import { ref } from "vue";

const emit = defineEmits(["createContact"]);

const name = ref("");
const phone = ref("");

function addItem() {
  emit("createContact", { name: name.value, phone: phone.value });
  name.value = "";
  phone.value = "";
}

</script>

<template>
  <div class="card bold">
    <div class="card-header"><h3>Add Form</h3></div>
    <div class="card-body">
      <form @submit.prevent="addItem">
        <div class="row mb-3">
          <label for="name" class="col-sm-2 col-form-label">name</label>
          <div class="col-sm-10">
            <input type="text" maxlength="12" class="form-control" id="name" v-model="name" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="phone" class="col-sm-2 col-form-label">phone</label>
          <div class="col-sm-10">
            <input type="tel" maxlength="12" class="form-control" id="phone" v-model="phone" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary bold font-btn"><font-awesome-icon icon="fa-solid fa-check-double" /> Add</button>
      </form>
    </div>
  </div>
  
</template>
