import React from "react";
import app from '../../../images/seguros/app.webp'
import turismo from '../../../images/seguros/turismo.webp'
import taxi from '../../../images/seguros/taxi.webp'
import moto from '../../../images/seguros/moto.webp'
import pick from '../../../images/seguros/pick.webp'
import camion from '../../../images/seguros/camion.webp'
import chasis from '../../../images/seguros/chasis.webp'
import especial from '../../../images/seguros/especial.webp'
import AppButton from "../ConfirmButton/AppButton";
import InformativeText from "../InformativeText/InformativeText";
import colors from "../../../constants/colors";
import RelevantPoints from "../RelevantPoints/RelevantPoints";

const CardsInsuranceTypes = () => {

    const seguros = [
        {
            title: <span>Transporte Turistico <br /> y de Personal</span>,
            image: turismo,
        },
        {
            title: 'Taxis',
            image: taxi,
        },
        {
            title: <span>Transporte Apps <br /> (Uber / Didi)</span>,
            image: app,
        },
        {
            title: 'Motocicletas',
            image: moto,
        },
        {
            title: <span>Pick Up <br /> de carga</span>,
            image: pick,
        },
        {
            title: <span>Camiones de <br /> 3.5 toneladas</span>,
            image: camion,
        },
        {
            title: <span>Chasis con <br /> adaptaciones especiales</span>,
            image: especial
        },
        {
            title: <span> Chasis <br /> Cabina</span>,
            image: chasis
        }
    ].map(item => {
        return (
            <div className="w-[170px] md:w-[234px] text-[14px] md:text-[18px] text-center relative md:hover:animate-jump animate-once">
                <img
                    src={item.image}
                    alt="image"
                    className="rounded-[25px]"
                />
                <span className="absolute bottom-[20px] left-0 right-0 text-white font-medium" style={{ fontFamily: 'Inter' }}>
                    {item.title}
                </span>
            </div>
        )
    })


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-2 md:w-[1000px] md:gap-4">
                    {seguros}
                </div>
                <AppButton
                tag="Cotizar Seguro"
                />
            </div>

        </div>


    )
}

export default CardsInsuranceTypes