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


## Deployment

To build the project for production:

```sh
npm run build
```

To preview the built project:

```sh
npm run preview
```