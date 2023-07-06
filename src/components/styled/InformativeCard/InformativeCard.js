import React, { useState } from "react";
import AppSlider from "../Slider/Slider";
import AppSelect from "../Dropdown/Dropdown";
import colors from "../../../constants/colors";
import AppButton from "../ConfirmButton/AppButton";
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { anual, comision, mensualPay, text1, text2, text3, totalPay } from "./text";


const InformativeCard = () => {
    const pagos = ["", "10,000 mx", "20,000 mxn", "40,000 mxn", "15,000 mxn"]
    const [accordion, setAccordion] = useState(true)

    const onHiddeResponsive = () => {
        setAccordion(!accordion)
    }

    console.log(accordion);

    return (
        <section className="w-[963px] md:h-[517px] flex flex-col md:flex-row rounded-[25px]">

            <div style={{ border: `2px solid ${colors.resalte1}` }} className="w-[full] md:h-full md:w-[31%] flex flex-col justify-center items-center md:gap-16 pt-0 md:pt-14 bg-white md:rounded-tr-[0px] rounded-tr-[25px] rounded-tl-[25px] md:rounded-bl-[25px]">
                <h1 style={{ font: 'normal normal bold 22px/26px Poppins' }} className="pt-6 md:pt-12">Monto que solicitas</h1>

                <div className="grid grid-cols-2 p-4 gap-4 place-items-center md:flex flex-col justify-center items-center pt-4 md:pt-2">
                    <AppSlider
                        type='Prestamo'
                        coin={true}
                        classes='w-[152px] md:w-[214px]'
                        size='responsive'
                    />

                    <AppSlider
                        type='Ingresos'
                        classes='w-[152px] md:w-[214px]'
                        coin={true}
                        size='responsive'
                    />

                    <AppSlider
                        classes='w-[152px] md:w-[214px]'
                        type='Plazo'
                        size='responsive'
                    />
                    <div className="md:p-14">
                        <AppSelect
                            tagLabel='Pagos mensuales'
                            title={'Pagos mensuales'}
                            items={pagos}
                            width={'w-[152px] md:w-[214px]'}
                        />
                    </div>
                </div>


            </div>

            <div style={{ backgroundColor: colors.fdoCalido, border: `2px solid ${colors.gris} ` }}
                className="flex flex-col w-full h-full md:rounded-tr-[25px] md:rounded-bl-[0px] rounded-bl-[25px] rounded-br-[25px]">
                <div style={{ font: 'normal normal 600 17px/21px Inter', color: colors.logo }}
                    className={`grid grid-cols-2 text-center gap-4 md:gap-12 md:flex flex-row justify-around items-center p-10 `}>
                    <div className="flex flex-col gap-0 md:gap-3">
                        <span>Tasa anual (%)</span><br />
                        <span style={{ font: 'normal normal normal 25px/26px Inter', color: "black" }}>{anual} </span>
                    </div>

                    <div className="flex flex-col md:gap-3">
                        <span>Pago mensual</span><br />
                        <span style={{ font: 'normal normal normal 25px/26px Inter', color: "black" }}>{mensualPay}</span>
                    </div>

                    <div className="flex flex-col md:gap-3">
                        <span>Pago Total (Aprox.)</span><br />
                        <span style={{ font: 'normal normal normal 25px/26px Inter', color: "black" }}>{totalPay}</span>
                    </div>

                    <div className="flex flex-col md:gap-3">
                        <span>Comisión por apertura</span><br />
                        <span style={{ font: 'normal normal normal 25px/26px Inter', color: "black" }}>{comision}</span>
                    </div>
                </div>

                <div className="border border-gray-300 mx-4 md:mx-8"></div>
                <div
                    className="md:hidden relative flex justify-center bottom-4"
                    onClick={onHiddeResponsive}
                ><BsFillArrowDownCircleFill size={30} fill={colors.resalte1}/></div>

                <div className={` ${accordion ?
                    'relative animate-fade-down animate-ease-in animate-delay-0 hidden'
                    :
                    'flex flex-row animate-fade-down animate-ease-in animate-delay-0'}`}>
                    <div
                        style={{ font: 'normal normal normal 15px/20px Inter', color: colors.brand1 }}
                        className="flex flex-col text-center p-6 gap-4 md:gap-10"
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            <div>{text1}</div>
                            <div>{text2}</div>
                        </div>


                        <div style={{ font: 'normal normal normal 15px/20px Inter', color: colors.brand1 }} className="text-center">
                            {text3}
                        </div>
                    </div>



                </div>

                <div className="flex justify-center items-center py-10">
                    <AppButton
                        tag="Continuar solicitud"
                    />
                </div>
            </div>
        </section>
    )
}

export default InformativeCard