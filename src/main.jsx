
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './css/style.css';
import './css/bootstrap.min.css';
import 'animate.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

// Librerías JS
import $ from 'jquery';
import { WOW } from 'wowjs';

// Hacer jQuery global (MUY IMPORTANTE)
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $;
}

// Esperar a que el DOM esté listo
$(function () {
  // Inicializar WOW
  new WOW.WOW().init();

  // Navbar sticky
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 45) {
      $('.nav-bar').addClass('sticky-top shadow-sm');
    } else {
      $('.nav-bar').removeClass('sticky-top shadow-sm');
    }
  });

  // Back to top
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });
});

// Render de la app
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


