<script setup>
import ContactList from "./ContactList.vue";
import ContactForm from "./ContactForm.vue";
import ContactSearch from "./ContactSearch.vue";
import { useContactStore } from "../stores/contact";

const Contact = useContactStore();

const vLoadContact = {
  beforeMount: (el) => {
    Contact.loadItem();
  },
};
</script>

<script>
export default {
  data() {
    return {
      isAdd: false,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="card bold">
      <div class="card-header">
        <h1>
          <font-awesome-icon icon="fa-solid fa-address-book" /> Vue Phonebook
        </h1>
      </div>
      <div class="card-body">
        <div v-if="isAdd">
          <button
            type="button"
            class="btn btn-warning mb-3 bold font-btn"
            @click="isAdd = false"
          >
            <marquee direction="left" scrollamount="3">
              <font-awesome-icon icon="fa-solid fa-rotate-left" /> Cancel
            </marquee>
          </button>
          <ContactForm @createContact="Contact.addItem" />
        </div>
        <div v-else>
          <button
            type="button"
            class="btn btn-info bold font-btn mb-3"
            @click="isAdd = true"
          >
            <marquee direction="left" scrollamount="3"><font-awesome-icon icon="fa-solid fa-square-plus" /> Add Contact </marquee>
          </button>
          <ContactSearch @searchContact="Contact.searchItem"/>
        </div>
      </div>
    </div>
    <div class="card my-4 bold">
      <ContactList v-load-contact :contacts="Contact.rawItems" @pagination="Contact.pagination" />
    </div>
  </div>
</template>
