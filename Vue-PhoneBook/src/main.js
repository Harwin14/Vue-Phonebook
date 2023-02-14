import { createApp } from "vue";
import { createPinia } from "pinia";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faAddressBook,
  faMobileScreen,
  faPenToSquare,
  faTrash,
  faFloppyDisk,
  faCheckDouble,
  faRotateLeft,
  faMagnifyingGlass,
  faSquarePlus
} from "@fortawesome/free-solid-svg-icons";

import { faContactBook } from "@fortawesome/free-regular-svg-icons";
/* add icons to the library */
library.add(
  faAddressBook,
  faMobileScreen,
  faPenToSquare,
  faTrash,
  faFloppyDisk,
  faCheckDouble,
  faRotateLeft,
  faContactBook,
  faMagnifyingGlass,
  faSquarePlus
);

// import App from "./App.vue";
import router from "./router";
import Contact from "./Contact.vue";
import "./assets/main.css";

// const app = createApp(App);
const app = createApp(Contact);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
