<template>
    <div>
      <h1>Contact Us</h1>
      <form class="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Your Name" required />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" required />
        <label>Message:</label>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <style>
  .contact-form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }
  .contact-form input, .contact-form textarea {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .contact-form button {
    background-color: #007BFF;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  </style>
  