import React from "react";
import colors from "../../../../constants/colors";
import AppButton from '../../ConfirmButton/AppButton'

const CardProduct = ({ img, tasa, comision, producto, loanAmount, loanTerm }) => {

    const loanAmountPay = parseInt(loanAmount + '000')
    const totalPayWithInterest = loanAmountPay + (loanAmountPay * (tasa.anual / 100))
    const totalPay = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(totalPayWithInterest);


    const monthPay = (totalPayWithInterest / loanTerm)
    const monthPayFinal = monthPay.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    })

    console.log(loanAmount);

    return (
        <>
            <ul className="w-[1080px] h-[96px] flex flex-row justify-between items-center text-center mt-1" style={{ font: "normal normal 600 20px/26px Inter", color: colors.brand1 }}>
                <div className={`w-[1080px] h-[96px] flex flex-row justify-between items-center text-center`} style={producto === 'MrFinan' || producto === 'KreditiWeb' ? { border: `2px solid ${colors.resalte1}`, borderRadius: '15px' } : null}>
                    <li className="w-full h-full flex justify-center items-center">
                        <img src={img} alt={producto} className="w-[154px] p-2" />
                    </li>

                    <li className="w-full h-full flex justify-center items-center gap-1" style={{ backgroundColor: colors.fdoGris }}>
                        {`  ${tasa.anual}.00%`} <br /> {`(hasta ${tasa.hasta}.00%)`}
                    </li>

                    <li className="w-full h-full flex justify-center items-center gap-1" >
                        {`${monthPayFinal}`}

                    </li>

                    <li className="w-full h-full flex justify-center items-center" style={{ backgroundColor: colors.fdoGris }}>
                        {`${totalPay}`}
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