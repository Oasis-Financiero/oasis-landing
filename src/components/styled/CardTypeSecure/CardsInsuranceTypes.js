import React from "react";
import app from '../../../images/seguros/app.webp'
import turismo from '../../../images/seguros/turismo.webp'
import taxi from '../../../images/seguros/taxi.webp'
import moto from '../../../images/seguros/moto.webp'
import pick from '../../../images/seguros/pick.webp'
import camion from '../../../images/seguros/camion.webp'
import chasis from '../../../images/seguros/chasis.webp'
import especial from '../../../images/seguros/especial.webp'




const CardsInsuranceTypes = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-2 w-[900px] md:w-[1000px] md:gap-4">
            <div className="w-[170px] md:w-[234px] text-[14px] md:text-[18px] text-center relative">
                <img
                    src={turismo}
                    alt="image"
                    className="rounded-[25px]"
                />
                <span className="absolute bottom-[20px] left-0 right-0 text-white font-medium" style={{ fontFamily: 'Inter' }}>
                    Transporte Turistico <br /> y de Personal
                </span>
            </div>

            <div className="w-[170px] md:w-[234px] text-[14px] md:text-[18px] text-center relative">
                <img
                    src={taxi}
                    alt="image"
                    className="rounded-[25px]"
                />
                <span className="absolute bottom-[20px] left-0 right-0 text-white font-medium" style={{ fontFamily: 'Inter' }}>
                    Taxis
                </span>
            </div>

            <div className="w-[170px] md:w-[234px] text-[14px] md:text-[18px] text-center relative">
                <img
                    src={app}
                    alt="image"
                    className="rounded-[25px]"
                />
                <span className="absolute bottom-[20px] left-0 right-0 text-white font-medium" style={{ fontFamily: 'Inter' }}>
                    Transporte Apps <br /> (Uber / Didi)
                </span>
            </div>

            <div className="w-[170px] md:w-[234px] text-[14px] md:text-[18px] text-center relative">
                <img
                    src={moto}
                    alt="image"
                    className="rounded-[25px]"
                />
                <span className="absolute bottom-[20px] left-0 right-0 text-white font-medium" style={{ fontFamily: 'Inter' }}>
                    Motocicletas
                </span>
            </div>

            <div className="w-[170px] md:w-[234px] text-[14px] md:text-[18px] text-center relative">
                <img
                    src={pick}
                    alt="image"
                    className="rounded-[25px]"
                />
                <span className="absolute bottom-[20px] left-0 right-0 text-white font-medium" style={{ fontFamily: 'Inter' }}>
                    Pick Up <br /> de carga
                </span>
            </div>

            <div className="w-[170px] md:w-[234px] text-[14px] md:text-[18px] text-center relative">
                <img
                    src={camion}
                    alt="image"
                    className="rounded-[25px]"
                />
                <span className="absolute bottom-[20px] left-0 right-0 text-white font-medium" style={{ fontFamily: 'Inter' }}>
                    Camiones de <br /> 3.5 toneladas
                </span>
            </div>

            <div className="w-[170px] md:w-[234px] text-[14px] md:text-[18px] text-center relative">
                <img
                    src={especial}
                    alt="image"
                    className="rounded-[25px]"
                />
                <span className="absolute bottom-[20px] left-0 right-0 text-white font-medium" style={{ fontFamily: 'Inter' }}>
                    Chasis con <br /> adaptaciones especiales
                </span>
            </div>

            <div className="w-[170px] md:w-[234px] text-[14px] md:text-[18px] text-center relative">
                <img
                    src={chasis}
                    alt="image"
                    className="rounded-[25px]"
                />
                <span className="absolute bottom-[20px] left-0 right-0 text-white font-medium" style={{ fontFamily: 'Inter' }}>
                    Cahsis <br /> Cabina
                </span>
            </div>
        </div>

    )
}

export default CardsInsuranceTypes