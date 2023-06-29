import React from "react";
import colors from "../../../constants/colors";
import AppSlider from "../Slider/Slider";
import * as style from './SecondaryCalculator.module.css'

const AppSecondaryCalculator = () => {
    return (
        <section className="md:w-[1080px] md:h-[160px] m-2 gap-4 md:gap-0 p-4 md:p-0 rounded-[25px] flex flex-col md:flex-row md:justify-around md:items-center" style={{ border: `2px solid ${colors.resalte1}` }}>
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-center" style={{ color: colors.resalte1 }} id={style.title}>Compara y elige <br /> <span style={{ color: 'black' }}>tu préstamo personal</span></h1>
                <span className="text-center" id={style.subtitle} style={{ color: colors.logo }}>6 opciones disponibles</span>
            </div>

            <div className="flex flex-col items-center">
                <div className="hidden md:block">
                    <AppSlider 
                    type="Préstamo"
                    coin={true}
                    />
                    </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="hidden md:block">
                    <AppSlider
                    type="Ingresos"
                    coin={true}
                /></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="hidden md:block">
                    <AppSlider 
                    type="Plazos"
                    />
                    </div>
            </div>
        </section>
    )
}

export default AppSecondaryCalculator