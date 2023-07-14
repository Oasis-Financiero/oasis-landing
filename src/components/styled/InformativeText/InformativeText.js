import React from "react";
import * as styles from './InformativeText.module.css'
import gral from '../../../images/seguros-auto/logo-general-seguros.svg'
import HDI from '../../../images/seguros-auto/logo-hdi.svg'
import logo_w from '../../../images/seguros-auto/logo-ana.svg'
import sura from '../../../images/seguros-auto/logo-sura.svg'
import map from '../../../images/seguros-auto/logo-mapfre.svg'
import colors from "../../../constants/colors";
import { text1, text2 } from "./text";

const InformativeText = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center gap-16">
                <div className="flex justify-center text-center items-center w-[354px] md:w-[46%]">
                    <h1 style={{ color: colors.brand1 }} id={styles.title}><span style={{ color: colors.resalte1 }}>Optimiza tu tiempo y ahorra dinero</span> al comparar tu seguro de auto, motocicleta o de cobertura especial de forma completamente digital.</h1>
                </div>

                <div id={styles.images} className="grid auto-cols-auto grid-flow-row grid-cols-3 place-items-center md:flex md:flex-row md:justify-center md:items-center gap-5">
                    <img className="object-contain" src={sura} alt="sura" />
                    <img className="object-contain" src={map} alt="map" />
                    <img className="object-contain" src={logo_w} alt="logo_w" />
                    <img className="object-contain" src={gral} alt="gral" />
                    <img className="object-contain w-[150px]" src={HDI} alt="HDI" />
                </div>

                <div className="flex justify-center text-center items-center w-[354px] md:w-[46%]">
                    <h1 id={styles.subtitle} style={{ color: colors.brand1 }}>¿En qué debes fijarte al momento de contratar tu seguro de auto?</h1>
                </div>

                <div style={{font: "normal normal normal 16px/26px Inter", color: colors.brand1}} className="flex flex-col gap-8 md:flex-row md:w-full md:px-[250px] md:gap-16">
                    <span className="md:w-[50%]">{text1}</span>
                    <span className="md:w-[50%]">{text2}</span>
                </div>
            </div>
        </section>
    )
}

export default InformativeText