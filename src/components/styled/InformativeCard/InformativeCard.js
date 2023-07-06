import React from "react";
import AppSlider from "../Slider/Slider";
import AppSelect from "../Dropdown/Dropdown";
import colors from "../../../constants/colors";
import products from "../ProductTable/CardProduct/products";

const InformativeCard = () => {
    const pagos = ["", "10,000 mx", "20,000 mxn", "40,000 mxn", "15,000 mxn"]
    const kreditiweb = products.filter(prod => prod.producto === 'KreditiWeb')

    return (
        <section style={{border : `2px solid ${colors.resalte1}`}} className="w-[963px] h-[517px] flex flex-col md:flex-row rounded-[25px]">

            <div className="w-full md:w-[35%] flex flex-col justify-center items-center md:gap-16 pt-0 md:pt-14 bg-white md:rounded-tr-[0px] rounded-tr-[25px] rounded-tl-[25px] md:rounded-bl-[25px]">
                <h1 style={{font: 'normal normal bold 22px/26px Poppins'}} className="pt-6 md:pt-12">Monto que solicitas</h1>

                <div className="grid grid-cols-2 p-4 gap-4 place-items-center md:flex flex-col justify-center items-center pt-8 md:pt-2">
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

            <div style={{backgroundColor: colors.fdoCalido}} className="w-full h-full md:rounded-tr-[25px] md:rounded-bl-0 rounded-bl-[25px] rounded-br-[25px]">
                <div style={{font: 'normal normal 600 17px/21px Inter', color: colors.logo}} className="grid grid-cols-2 text-center gap-12 md:flex flex-row justify-around items-center p-12">
                    <span>Tasa anual (%)</span>
                    <span>Pago mensual</span>
                    <span>Pago Total (Aprox.)</span>
                    <span>Comisión por apertura</span>
                </div>

                <div className="flex flex-row justify-around items-center text-center">
                    <span>{kreditiweb[0].tasa.anual}</span>
                    <span>{kreditiweb[0].mensual}</span>
                    <span>{kreditiweb[0].total}</span>
                    <span>{kreditiweb[0].comision}</span>
                </div>
            </div>
        </section>
    )
}

export default InformativeCard