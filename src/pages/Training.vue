<template>
    <div>
      <h1>Training Programs</h1>
      <div class="services-container">
        <div class="service-card" v-for="program in trainingPrograms" :key="program.name">
          <div class="card-content">
            <h2>{{ program.name }}</h2>
            <p class="description">{{ program.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        trainingPrograms: [
          { name: "Personal Leadership Style", description: "Understand and develop your leadership style." },
          { name: "Delegation & Decision Making", description: "Learn effective delegation and decision-making strategies." },
          { name: "Supporting Development", description: "Motivate and manage performance effectively." },
          { name: "Courageous Conversations", description: "Handle difficult conversations with confidence." }
        ]
      };
    }
  };
  </script>