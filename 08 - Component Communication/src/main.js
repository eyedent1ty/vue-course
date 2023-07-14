import { createApp } from "vue";
import App from './App.vue';
import FriendsContact from './components/FriendsContact.vue';

const app = createApp(App);

app.component('friend-contact', FriendsContact);

app.mount('#app');
