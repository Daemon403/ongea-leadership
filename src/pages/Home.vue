<template>
  <div class="home-container">
    <header>
      <h1>ONGEA Leadership Training</h1>
      <p>Empowering leaders for a better tomorrow.</p>
    </header>
    <section class="mission">
      <h2>Our Mission</h2>
      <p>We are an assertive innovation to the world, a generous hub of excellence.</p>
    </section>
    <section class="values">
      <h2>Our Values</h2>
      <ul>
        <li>Optimism</li>
        <li>Nobility</li>
        <li>Generosity</li>
        <li>Excellence</li>
        <li>Assertiveness</li>
      </ul>
    </section>
    <section class="services">
      <h2>What We Offer</h2>
      <div class="services-container">
        <div class="service-card" v-for="service in services" :key="service.name">
          <h3>{{ service.name }}</h3>
          <p class="description">{{ service.description }}</p>
        </div>
      </div>
    </section>
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
.home-container {
  text-align: center;
  padding: 20px;
  animation: fadeIn 1s ease-in;
}
.mission, .values, .services {
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
}
.services-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.service-card {
  background: #e3e3e3;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}
.service-card:hover {
  transform: scale(1.05);
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>