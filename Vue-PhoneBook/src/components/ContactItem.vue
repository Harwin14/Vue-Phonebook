<script>
import { useContactStore } from "../stores/contact";

export default {
  setup() {
    const Contact = useContactStore();
    return { Contact };
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEdit: false,
      name: this.contact.name,
      phone: this.contact.phone,
    };
  },
  methods: {
    update(id) {
      this.Contact.updateItem({ id, name: this.name, phone: this.phone }),
        (this.isEdit = false);
    },
  },
};
</script>

<template>
  <div class="card kartu" v-if="isEdit">
    <div class="card-body">
      <input
        type="text"
        id="name"
        maxlength="12"
        name="name"
        v-model="name"
        class="form-control"
      />
      <input
        type="tel"
        maxlength="12"
        name="phone"
        id="phone"
        v-model="phone"
        class="form-control"
        required
      />
      <div class="d-flex py-4">
        <button
          type="button"
          class="btn btn-success btn-card"
          @click="update(contact.id)"
        >
          Update
        </button>
        <button type="button" class="btn btn-warning btn-card" @click="isEdit = false">
          Cancel
        </button>
      </div>
    </div>
  </div>
  <div class="card kartu bold" v-else>
    <div class="card-body">
      <div class="col">
        <font-awesome-icon icon="fa-solid fa-address-book" />
        <span> Name : </span>
        <span>{{ contact.name }}</span>
      </div>
      <div class="col">
        <font-awesome-icon icon="fa-solid fa-mobile-screen" />
        <span> Phone : </span>
        <span>{{ contact.phone }}</span>
      </div>
      <div class="d-flex py-4" v-if="contact.sent">
        <button type="button" class="btn btn-success btn-card" @click="isEdit = true">
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
        </button>
        <button
          type="button"
          class="btn btn-danger btn-card"
          @click="Contact.removeItem(contact.id)"
        >
        <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
      </div>
      <div v-else>
        <button type="button" class="btn btn-warning btn-card" @click="Contact.resendItem(contact)">Resend</button>
      </div>
    </div>
  </div>
</template>
