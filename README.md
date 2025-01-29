# ONGEA Leadership Website

This is a Vue 3 and Vite-powered web application for ONGEA Leadership, an initiative aimed at empowering leaders through various training and consultancy services.

## Project Setup

Ensure you have [Node.js](https://nodejs.org/) installed, then install Vue 3 and Vite before running this project:

```sh
npm create vite@latest ongea-leadership --template vue
cd ongea-leadership
npm install
```

## Running the Project

Start the development server:

```sh
npm run dev
```

## Project Structure

```
ongea-leadership/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── Services.vue
│   │   ├── Training.vue
│   │   ├── About.vue
│   │   ├── Contact.vue
│   ├── router/
│   │   ├── index.js
│   ├── App.vue
│   ├── main.js
│
├── public/
├── package.json
├── vite.config.js
```

## Router Configuration

The application uses Vue Router to navigate between pages:

```js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Services from '../pages/Services.vue';
import Training from '../pages/Training.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/training', component: Training },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

## Components

### Navbar
Navigation bar with router links:

```vue
<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/services">Services</router-link></li>
      <li><router-link to="/training">Training</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>
```

### Footer
Footer displaying copyright information:

```vue
<template>
  <footer>
    <p>© 2025 ONGEA Leadership. All rights reserved.</p>
  </footer>
</template>
```

## Services Page Example

```vue
<template>
  <div>
    <h1>Our Services</h1>
    <div class="services-container">
      <div class="service-card" v-for="service in services" :key="service.name">
        <div class="card-content">
          <h2>{{ service.name }}</h2>
          <p class="description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { name: "Leadership & Team Building Training", description: "Enhance leadership and teamwork skills for effective collaboration." },
        { name: "Public Speaking Skills", description: "Master the art of confident and persuasive communication." },
        { name: "Entrepreneurship Training", description: "Develop business acumen and entrepreneurial mindset." },
        { name: "HR Consultations", description: "Expert HR guidance for organizational success." },
        { name: "Event Management", description: "Plan and execute successful events with ease." }
      ]
    };
  }
};
</script>

<style>
.services-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.service-card {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}
.service-card:hover .description {
  display: block;
}
.description {
  display: none;
  font-size: 14px;
  margin-top: 10px;
  color: #555;
}
</style>
```

## Deployment

To build the project for production:

```sh
npm run build
```

To preview the built project:

```sh
npm run preview
```

## License

This project is licensed under the MIT License.