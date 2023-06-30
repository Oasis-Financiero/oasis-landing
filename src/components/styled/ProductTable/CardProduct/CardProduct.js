import React from "react";
import colors from "../../../../constants/colors";
import AppButton from '../../ConfirmButton/AppButton'

const CardProduct = ({ img, tasa, mensual, total, comision, producto }) => {

    const mens = mensual.toString()
    const mensfinal = mens[0] + ',' + mens.substring(1)

    const tot = total.toString()
    const totfinal = tot[0] + tot[1] + ',' + tot.substring(2)
    return (
        <>
            <ul className="w-[1080px] h-[96px] flex flex-row justify-between items-center text-center mt-1" style={{ font: "normal normal 600 22px/26px Inter", color: colors.brand1 }}>
                <div className={`w-[1080px] h-[96px] flex flex-row justify-between items-center text-center`} style={producto === 'MrFinan' || producto === 'KreditiWeb' ? {border: `2px solid ${colors.resalte1}`, borderRadius: '15px'} : null}>
                    <li className="w-full h-full flex justify-center items-center">
                        <img src={img} alt={producto}/>
                    </li>

                    <li className="w-full h-full flex justify-center items-center gap-1" style={{ backgroundColor: colors.fdoGris }}>
                        {`  ${tasa.anual}.00`} <br /> {`(hasta ${tasa.hasta}.00)`}
                    </li>

                    <li className="w-full h-full flex justify-center items-center gap-1" >
                        {`$ ${mensfinal}`}

                    </li>

                    <li className="w-full h-full flex justify-center items-center" style={{ backgroundColor: colors.fdoGris }}>
                        {`$ ${totfinal}`}
                    </li>

                    <li className="w-full h-full flex justify-center items-center" >
                        {`${comision}%`}
                    </li>

                    <li className="w-full h-full flex justify-center items-center rounded-[15px]" style={{ backgroundColor: colors.fdoGris }}>
                        <AppButton
                            tag={'Solicitar'}
                            width={133}
                        />
                    </li>
                </div>

            </ul>
        </>
    )
}

export default CardProduct