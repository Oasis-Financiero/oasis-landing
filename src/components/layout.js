import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import Footer from "./footer"
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";
import colors from "../constants/colors";
import { useLocation } from '@reach/router'
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";


function Layout({ children }) {


  const onAccept = () => {
    let location
    if (typeof window !== "undefined") {
      location = useLocation()
    }
    initializeAndTrack(location)
  }


  console.log(location);

  /* let colWidthStyle;

  switch(page) {
    case "blog":
      colWidthStyle = "max-w-none pt-12 px-4 md:px-16";
      break;
    case "blogpost":
      colWidthStyle = "max-w-3xl md:py-16 px-4";
      break;
    case "newlanding":
      colWidthStyle = "max-w-none";
      break;
    default:
      colWidthStyle = "max-w-4xl md:py-16 px-4";
  } */

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />
      {children}
      <CookieConsent
        onAccept={onAccept}
        enableDeclineButton
        declineButtonText="Rechazar"
        location="bottom"
        declineButtonStyle={{ backgroundColor: colors.resalte2, fontSize: '13px', fontFamily: 'inter', borderRadius: '8px', color: 'white' }}
        buttonText="Aceptar" // Texto del botón de aceptar
        cookieName="gatsby-gdpr" // Nombre de la cookie para almacenar el consentimiento
        style={{ background: colors.logo, color: 'white', fontFamily: 'Poppins', display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Estilos del banner (opcional)
        buttonStyle={{ backgroundColor: colors.resalte2, fontSize: '13px', fontFamily: 'inter', borderRadius: '8px', color: 'white' }} // Estilos del botón (opcional)
      >
        Este sitio web utiliza cookies para asegurarse de brindarte la mejor experiencia en nuestro sitio.<br />
        <span style={{ fontSize: "10px" }}>Oasis Financiero emplea cookies esenciales y tecnologías similares para el correcto funcionamiento de este sitio y para mejorar tu experiencia. Aparte de las cookies imprescindibles, utilizamos cookies opcionales con distintos propósitos, como personalizar tu navegación, efectuar análisis estadísticos, mostrar anuncios y colaborar con terceros.
          Si haces clic en "Aceptar", autorizas la instalación de cookies opcionales en tu dispositivo. Si prefieres no hacerlo, selecciona "Rechazar".</span>
      </CookieConsent>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
