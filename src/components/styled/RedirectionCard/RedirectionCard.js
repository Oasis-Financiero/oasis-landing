import React from "react";
import kreditiweb from '../../../images/products/logo_kreditiweb.png'
import colors from "../../../constants/colors";
import * as styles from './RedirectionCard.module.css'

const RedirectionCard = () => {
    return (
        <div className="w-[903px] flex justify-center m-2" style={{ border: `2px solid ${colors.resalte1}` }}>
            <div className="w-auto md:w-full p-4 flex flex-col justify-center items-center gap-4 md:gap-6">
                <img src={kreditiweb} alt="krediti" className="w-[100px] md:w-[200px]" />
                <h2 id={styles.subtitle}
                    className="bg-slate-800 rounded-[50px] h-[100%] px-6 text-sm text-white">
                    Soluciones reales para gente como tú
                </h2>

                <h1 id={styles.title}
                    className="text-slate-800 text-center text-xs md:text-xl">
                    La financiación que necesitas, al alcance de tu mano<br />
                    <span>Solicita hasta 500,000$ MXN en unos minutos</span>
                </h1>

                <button className=" bg-cyan-400 p-1 px-6 rounded-[25em]">
                    <span id={styles.button}>¿Empezamos?</span>
                </button>
            </div>
        </div>

    )
}

export default RedirectionCard