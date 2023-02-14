<script setup>
import ContactItem from "./ContactItem.vue";

const emit = defineEmits(["pagination"]);

defineProps({
  contacts: {
    type: Object,
    required: true,
  },
});

const scrolling = (event) => {
  var element = event.target;
  if (element.scrollHeight - element.scrollTop - element.clientHeight <= 1) {
    emit("pagination");
    console.log("sampe bawah");
  }
}; 
</script>   
<template>
  <div class="box row mx-4 my-4 gap-3 d-flex justify-content-between pagination" v-on:scroll="scrolling">
    <ContactItem v-for="contact in contacts" :contact="contact" />
  </div>
</template>  
  