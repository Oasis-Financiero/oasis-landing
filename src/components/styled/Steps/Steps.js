import React from "react";
import colors from "../../../constants/colors";
import regist from '../../../images/steps/ico-registro.svg'
import aut from '../../../images/steps/ico-autorizar.svg'
import docs from '../../../images/steps/ico-documentos.svg'
import firma from '../../../images/steps/ico-firmar.svg'
import * as styles from './steps.module.css'

const AppSteps = () => {
    return (
        <div className="h-[514px] flex flex-col justify-center items-center gap-10">
            <h1 id={styles.title} className="text-center text-white">Obtén tu préstamo <br /><span style={{ color: colors.resalte1 }}>en minutos</span></h1>

            <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:gap-5">

                <div style={{ border: `4px solid ${colors.resalte1}` }} className={`w-[156px] h-[156px] md:w-[196px] md:h-[196px] bg-white rounded-[25px] flex flex-col justify-center items-center relative`}>
                    <div className="absolute right-[-3px] top-[-3px]">
                        <span style={{ backgroundColor: colors.resalte1, fontFamily: 'Inter', fontWeight: 'bold', color: 'white' }} className="rounded-full p-3"><span className="text-transparent">/</span>1<span className="text-transparent">.</span></span>
                    </div>

                    <img src={regist} alt="image_regist" className="w-[72px] md:w-[90px]" />
                    <span style={{fontFamily: 'Inter', fontWeight: 'normal'}} className="text-center text-[14px] md:text-[16px]">Regístrate en nuestro portal</span>
                </div>

                <div className="w-[156px] h-[156px] md:w-[196px] md:h-[196px] bg-white rounded-[25px] flex flex-col justify-center items-center relative">
                    <div className="absolute right-[-3px] top-[-3px]">
                        <span style={{ backgroundColor: colors.resalte1, fontFamily: 'Inter', fontWeight: 'bold', color: 'white' }} className="rounded-full p-3"><span className="text-transparent">.</span>2<span className="text-transparent">.</span></span>
                    </div>
                    <img src={aut} alt="image_regist" className="w-[72px] md:w-[90px]" />
                    <span style={{fontFamily: 'Inter', fontWeight: 'normal'}} className="text-center text-[14px] md:text-[16px]">Autoriza la consulta <br />de tu historial</span>
                </div>

                <div className="w-[156px] h-[156px] md:w-[196px] md:h-[196px] bg-white rounded-[25px] flex flex-col justify-center items-center relative">
                    <div className="absolute right-[-3px] top-[-3px]">
                        <span style={{ backgroundColor: colors.resalte1, fontFamily: 'Inter', fontWeight: 'bold', color: 'white' }} className="rounded-full p-3"><span className="text-transparent">.</span>3<span className="text-transparent">.</span></span>
                    </div>
                    <img src={docs} alt="image_regist" className="w-[72px] md:w-[90px]" />
                    <span style={{fontFamily: 'Inter', fontWeight: 'normal'}} className="text-center text-[14px] md:text-[16px]">Sube tus <br />documentos</span>
                </div>

                <div className="w-[156px] h-[156px] md:w-[196px] md:h-[196px] bg-white rounded-[25px] flex flex-col justify-center items-center relative">
                    <div className="absolute right-[-3px] top-[-3px]">
                        <span style={{ backgroundColor: colors.resalte1, fontFamily: 'Inter', fontWeight: 'bold', color: 'white' }} className="rounded-full p-3"><span className="text-transparent">.</span>4<span className="text-transparent">.</span></span>
                    </div>
                    <img src={firma} alt="image_regist" className="w-[72px] md:w-[90px]" />
                    <span style={{fontFamily: 'Inter', fontWeight: 'normal'}} className="text-center text-[14px] md:text-[16px]">Firma y recibe <br />tu préstamo</span>
                </div>

            </div>
        </div>
    )
}

export default AppSteps