import React, { useState } from "react";
import colors from "../../../constants/colors";
import { TbSquareRoundedArrowDownFilled, TbSquareRoundedArrowUpFilled } from 'react-icons/tb'

const ProductTable = () => {

    const [tasaSort, setTasaSort] = useState(false)
    const [monthSort, setMonthSort] = useState(false)

    const handleSort = (sort) => {
        switch (sort) {
            case 'anual':
                setTasaSort(!tasaSort)

               

            case 'mensual':
                setMonthSort(!monthSort)

               
            default:
                null
        }
    }



    return (
        <section className="w-[1080px] flex justify-center items-center">
            <ul className="w-[1080px] h-[96px] flex flex-row justify-between items-center text-center" style={{ font: "normal normal 600 18px/21px Inter", color: colors.logo }}>
                <li className="w-full h-full flex justify-center items-center rounded-tl-lg" >
                    Producto
                </li>

                <li className="w-full h-full flex justify-center items-center gap-1" style={{ backgroundColor: colors.fdoGris }}>
                    Tasa anual (%)
                    {tasaSort ? <TbSquareRoundedArrowUpFilled onClick={() => handleSort('anual')}/> : <TbSquareRoundedArrowDownFilled onClick={() => handleSort('anual')} />}
                </li>

                <li className="w-full h-full flex justify-center items-center gap-1" >
                    Pago mensual
                    {monthSort ? <TbSquareRoundedArrowUpFilled onClick={() => handleSort('mensual')}/> : <TbSquareRoundedArrowDownFilled onClick={() => handleSort('mensual')} />}
                </li>

                <li className="w-full h-full flex justify-center items-center" style={{ backgroundColor: colors.fdoGris }}>
                    Pago Total <br /> (Aprox.)
                </li>

                <li className="w-full h-full flex justify-center items-center" >
                    Comisión <br /> por apertura
                </li>

                <li className="w-full h-full flex justify-center items-center rounded-tr-lg" style={{ backgroundColor: colors.fdoGris }}>
                    ¡Lo quiero!
                </li>
            </ul>

        </section>
    )
}

export default ProductTable