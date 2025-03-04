// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// import { createApp } from 'vue';
// import Bt1 from './bt1.vue';  // Chỉ dùng Bt1.vue

// createApp(Bt1).mount('#app');


import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import router from './router/index.js';
library.add(faTwitter, faFacebook, faBookmark,fas);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);


// createApp(App)
app.use(router);
app.mount('#app');