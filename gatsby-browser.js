import "./src/css/style.css";

// Agrega el código de Google Analytics aquí
export const onClientEntry = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TZERK25DRT');
};
