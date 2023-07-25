import React, { useState } from "react";
import colors from "../../../constants/colors";
import { TbSquareRoundedArrowDownFilled, TbSquareRoundedArrowUpFilled } from 'react-icons/tb'
import { CardProduct } from "./CardProduct/CardProduct";
import products from "./CardProduct/products";
import { anualSorted, anualSortedReverse, mensualSorted, mensualSortedReverse } from "./CardProduct/helpers";


const ProductTable = ({ loanAmount, loanTerm, selectedTypePay, incomeAmount }) => {

    const [tasaSort, setTasaSort] = useState(false)
    const [monthSort, setMonthSort] = useState(false)

    const handleSort = (sort) => {
        switch (sort) {
            case 'anual':
                if (!tasaSort) {
                    anualSorted()
                } else {
                    anualSortedReverse()
                }
                setTasaSort(!tasaSort)
                break


            case 'mensual':
                if (!monthSort) {
                    mensualSorted()
                } else {
                    mensualSortedReverse()
                }
                setMonthSort(!monthSort)
                break

            default:
                null
        }
    }


    const tableItem = products.map((props) => {
        return <CardProduct
            {...props}
            key={props.key}
            loanAmount={loanAmount}
            loanTerm={loanTerm}
            selectedTypePay={selectedTypePay}
            incomeAmount={incomeAmount}
        />
    })

    console.log(selectedTypePay)


    return (
        <section className="w-[1080px] flex flex-col justify-center items-center">
            <ul className="w-[1080px] h-[96px] flex flex-row justify-between items-center text-center" style={{ font: "normal normal 600 18px/21px Inter", color: colors.logo }}>
                <li className="w-full h-full flex justify-center items-center" >
                    Producto
                </li>

                <li className="w-full h-full flex justify-center items-center gap-1" style={{ backgroundColor: colors.fdoGris }}>
                    Tasa anual (%)
                    {tasaSort ? <TbSquareRoundedArrowUpFilled className="cursor-pointer" onClick={() => handleSort('anual')} /> : <TbSquareRoundedArrowDownFilled className="cursor-pointer" onClick={() => handleSort('anual')} />}
                </li>

                <li className="w-full h-full flex justify-center items-center gap-1" >
                    {selectedTypePay === "Pagos Mensuales" ? 'Pago Mensual' : 'Pago Quincenal'}
                    {monthSort ? <TbSquareRoundedArrowUpFilled className="cursor-pointer" onClick={() => handleSort('mensual')} /> : <TbSquareRoundedArrowDownFilled className="cursor-pointer" onClick={() => handleSort('mensual')} />}
                </li>

                <li className="w-full h-full flex justify-center items-center" style={{ backgroundColor: colors.fdoGris }}>
                    Pago Total <br /> (Aprox.)
                </li>

                <li className="w-full h-full flex justify-center items-center" >
                    Comisión <br /> por apertura
                </li>

                <li className="w-full h-full flex justify-center items-center" style={{ backgroundColor: colors.fdoGris }}>
                    ¡Lo quiero!
                </li>
            </ul>

            <div>
                {tableItem}
            </div>

        </section>
    )
}

export default ProductTable