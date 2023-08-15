import React, { useEffect, useState } from "react";
import cookies from "./helpers";
import colors from "../../../constants/colors";
import AppSecondaryButton from "../SecondaryButton/SecondaryButton";
import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";



const CookieConsentBanner = () => {

    const location = useLocation()

    const [showBanner, setShowBanner] = useState(true)

    useEffect(() => {
        const cookieVerified = cookies.get("cookie_tracker")
        if (cookieVerified) {
            initializeAndTrack(location)
            setShowBanner(false)
        }
    }, [])

    const handleOnSubmitCookies = (e) => {
        e.preventDefault()
        initializeAndTrack(location)
        setShowBanner(false)
        cookies.set("cookie_tracker", true, 365)
    }

    const handleOnRejectCookies = (e) => {
        e.preventDefault()
        setShowBanner(false)
        cookies.set("cookie_tracker", true, 1)
    }

    return (

         <div className={`fixed bottom-0 w-full m-0 lg:m-6 lg:w-[477px] z-50 flex flex-col lg:rounded-[25px] rounded-none ${showBanner ? 'right-0 animate-fade-up transition-all' : 'right-[-1000px] animate-ease-in transition-all animate-fade-up'}`}
            style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.brand1}`
            }}
        >
            <span style={{ fontFamily: 'Inter', color: colors.brand1 }} className="p-4 text-[16px] lg:text-[18px] text-center">
                Este sitio web utiliza cookies para asegurarse de brindarte la mejor experiencia en nuestro sitio.<br />
                <span className="text-[10px] lg:text-[12px] " style={{ fontFamily: 'Poppins', color: colors.resalte1 }}>Oasis Financiero emplea cookies esenciales y tecnologías similares para el correcto funcionamiento de este sitio y para mejorar tu experiencia. Aparte de las cookies imprescindibles, utilizamos cookies opcionales con distintos propósitos, como personalizar tu navegación, efectuar análisis estadísticos, mostrar anuncios y colaborar con terceros.
                    Si haces clic en "Aceptar", autorizas la instalación de cookies opcionales en tu dispositivo. Si prefieres no hacerlo, selecciona "Rechazar".</span>
            </span >

            <div className="flex flex-row justify-around items-center p-4">
                <AppSecondaryButton
                    text="Rechazar"
                    onClick={handleOnRejectCookies}
                />

                <AppSecondaryButton
                    onClick={handleOnSubmitCookies}
                    text="Aceptar" />
            </div>
        </div>

    )
}

export default CookieConsentBanner