
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './css/style.css';
import './css/bootstrap.min.css';
import 'animate.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

// Librerías JS
import { WOW } from 'wowjs';
import $ from 'jquery';

// 🔧 Hacer que jQuery sea global
window.$ = $;
window.jQuery = $;

// 🔧 Ejecutar tu código jQuery y WOW
$(document).ready(function () {
  // Inicializa WOW
  new WOW().init();

  // Sticky navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $('.nav-bar').addClass('sticky-top shadow-sm');
    } else {
      $('.nav-bar').removeClass('sticky-top shadow-sm');
    }
  });

  // Botón "back to top"
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });
});

// Render de la app React
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

