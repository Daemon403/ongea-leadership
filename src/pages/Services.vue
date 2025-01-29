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
  