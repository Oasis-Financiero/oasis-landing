import React from "react";
import colors from "../../../constants/colors";
import AppSlider from "../Slider/Slider";
import * as style from './SecondaryCalculator.module.css'
import ProductTable from "../ProductTable/ProductTable";

const AppSecondaryCalculator = ({ loanAmount, setLoanAmount, loanTerm, setLoanTerm, incomeAmount, setIncomeAmount, id }) => {
    return (
        <section className="flex flex-col justify-center items-center gap-3 overflow-x-hidden">
            <section className="md:w-[1080px] md:h-[160px] m-2 gap-4 md:gap-0 p-4 md:p-0 rounded-[25px] flex flex-col md:flex-row md:justify-around md:items-center" style={{ border: `2px solid ${colors.resalte1}` }}>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-center" style={{ color: colors.resalte1 }} id={style.title}>Compara y elige <br /> <span style={{ color: 'black' }}>tu préstamo personal</span></h1>
                    <span className="text-center" id={style.subtitle} style={{ color: colors.logo }}>6 opciones disponibles</span>
                </div>

                <div className="flex flex-col items-center">
                    <div>
                        <AppSlider
                            type="Préstamo"
                            coin={true}
                            hidden={true}
                            classes='w-[207px]'
                            value={loanAmount}
                            onValueChange={setLoanAmount}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div>
                        <AppSlider
                            type="Ingresos"
                            coin={true}
                            hidden={true}
                            classes='w-[207px]'
                            value={incomeAmount}
                            onValueChange={setIncomeAmount}
                        /></div>
                </div>

                <div className="flex flex-col items-center">
                    <div>
                        <AppSlider
                            type="Plazos"
                            limit={18}
                            hidden={true}
                            classes='w-[207px]'
                            value={loanTerm}
                            onValueChange={setLoanTerm}
                        />
                    </div>
                </div>

            </section >

            <section className="flex overflow-x-scroll w-screen md:w-full md:overflow-hidden">

                <ProductTable
                    loanAmount={loanAmount}
                    loanTerm={loanTerm}
                />

            </section>
        </section>

    )
}

export default AppSecondaryCalculator