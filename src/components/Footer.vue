<template>
    <footer class="footer bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
        <div class="footer-content">
            <div class="logo">
            <img src="/public/logo.png" alt="Dragon Ball Logo" class="logo-img" />
            </div>
            <div class="links">
            <a href="/" class="footer-link">Inicio</a>
            <a href="/" class="footer-link">Acerca de</a>
            <a href="/" class="footer-link">Contacto</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Dragon Ball - Todos los derechos reservados</p>
        </div>
    </footer>
</template>
  
  <script setup>
  // Puedes agregar lógica aquí si es necesario
  </script>
  
  <style scoped>
  .footer {
    background-color: #f7a900; /* Amarillo de Dragon Ball */
    color: #fff;
    height: 10vh;
    text-align: center;
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  
  .logo-img {
    height: 50px;
    width: auto;
  }
  
  .links {
    display: flex;
    gap: 20px;
  }
  
  .footer-link {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
  }
  
  .footer-link:hover {
    text-decoration: underline;
  }
  
  .footer-bottom {
    font-size: 12px;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
    }
  
    .links {
      margin-top: 10px;
      flex-direction: column;
      gap: 10px;
    }
  }
  </style>
  