import React from "react";
import colors from "../../../constants/colors";
import AppSlider from "../Slider/Slider";
import * as style from './SecondaryCalculator.module.css'
import ProductTable from "../ProductTable/ProductTable";
import products from "../ProductTable/CardProduct/products";

const AppSecondaryCalculator = ({ loanAmount, setLoanAmount, loanTerm, setLoanTerm, incomeAmount, setIncomeAmount, selectedTypePay, uniqueID }) => {
    return (
        <section className="flex flex-col justify-center items-center gap-3">
            <section className="md:w-[550px] lg:w-[1080px] lg:h-[160px] gap-4 md:gap-0 rounded-[25px] flex flex-col lg:flex-row md:justify-around md:items-center p-12" style={{ border: `2px solid ${colors.resalte1}` }}>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-center text-[26px] md:text-[18px] lg:text-[26px]" style={{ color: colors.resalte1 }}>Compara y elige <br /> <span style={{ color: 'black' }}>tu préstamo personal</span></h1>
                    <span className="text-center text-[13px] lg:text-[20px]"  style={{ color: colors.logo }}>{products.length} opciones disponibles</span>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-[207px] sm:w-[150px] md:w-[207px]">
                        <AppSlider
                            type="Préstamo"
                            coin={true}
                            hidden={true}
                            value={loanAmount}
                            onValueChange={setLoanAmount}
                            limit={100000}
                            step={1000}
                            min={1000}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-[207px]">
                        <AppSlider
                            type="Ingresos"
                            coin={true}
                            hidden={true}
                            value={incomeAmount}
                            onValueChange={setIncomeAmount}
                            limit={100000}
                            step={1000}
                            min={1000}
                        /></div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-[207px]">
                        <AppSlider
                            type="Plazos"
                            limit={18}
                            hidden={true}
                            value={loanTerm}
                            onValueChange={setLoanTerm}
                            step={1}
                            min={1}
                        />
                    </div>
                </div>

            </section >

            <section className="flex overflow-x-scroll w-screen lg:w-full lg:overflow-hidden">

                <ProductTable
                    loanAmount={loanAmount}
                    loanTerm={loanTerm}
                    selectedTypePay={selectedTypePay}
                    incomeAmount={incomeAmount}
                    uniqueID={uniqueID}
                />

            </section>
        </section>

    )
}

export default AppSecondaryCalculator