import React, { useState } from "react";
import AppSlider from "../Slider/Slider";
import AppSelect from "../Dropdown/Dropdown";
import colors from "../../../constants/colors";
import AppButton from "../ConfirmButton/AppButton";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'
import { fidea } from "./text";
import products from "../ProductTable/CardProduct/products";
import { Link } from "gatsby";
import fideabanner from '../../../images/products/banners/fidea-banner.jpg'


const InformativeCard = ({ montoParam, ingresosParam, plazoParam, type, imageBanner }) => {

    let typeProduct;
    if (typeof window !== "undefined") {
        const queryString = window.location.pathname
        typeProduct = queryString.slice(21)
    }

    const pagos = ["Pagos Mensuales", "Pagos Quincenales"]
    const [paySelected, setPaySelected] = useState("Pagos Mensuales")
    const [accordion, setAccordion] = useState(true)
    const [amount, setAmount] = useState(montoParam ? +montoParam : 5000)
    const [income, setIncome] = useState(ingresosParam ? +ingresosParam : 10000)
    const [term, setTerm] = useState(plazoParam ? +plazoParam : 12)
    const [prodName, setProdName] = useState(type ? type : typeProduct)

    const onHiddeResponsive = () => {
        setAccordion(!accordion)
    }

    let monthPay, fortnightlyPay;
    const product = products.filter(prod => prod.producto.toLowerCase() === prodName)

    const totalPayWithInterest = amount + (amount * (product[0]?.tasa.anual) / 100)
    fortnightlyPay = (totalPayWithInterest / term) / 2
    monthPay = (totalPayWithInterest / term)

    const totalPayVisual = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(totalPayWithInterest);

    const fortnightlyPayFinal = fortnightlyPay?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    })

    const monthPayFinal = monthPay?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    })

    let link, text1, text2, text3, banner;
    switch (type) {
        case "kreditiweb":
            link = 'http://clean.tracksacai.com/aff_c?offer_id=2885&aff_id=2524'
            break;
        case "fidea":
            link = 'https://www.fidea.mx/?refName=2023041314ef&refSubId=oasis_financiero&refTransactionId=banner_comparador'
            text1 = fidea.text1
            text2 = fidea.text2
            text3 = fidea.text3
            break;
        case "mrfinan":
            link = 'http://clean.tracksacai.com/aff_c?offer_id=3364&aff_id=2524&aff_sub=banner_oasis_financiero'
            banner = <img src={fideabanner} alt="fideaBanner" />
            break;
        case "escampa":
            link = 'https://solicitud.escampa.mx/nuevo-registro?utm_source=oasis_financiero&utm_medium=banner&utm_campaign=escampa_2023&utm_id=oasis_financiero'
            break;
        default:
            link = '/'
            break
    }


    return (
        <section className="m-0 w-[963px] md:h-[517px] flex flex-col md:flex-row rounded-[25px]">

            <div style={{ border: `2px solid ${colors.resalte1}` }} className="w-[full] md:h-full md:w-[31%] flex flex-col justify-center items-center md:gap-16 pt-0 md:pt-14 bg-white md:rounded-tr-[0px] rounded-tr-[25px] rounded-tl-[25px] md:rounded-bl-[25px]">
                <h1 style={{ font: 'normal normal bold 22px/26px Poppins' }} className="pt-6 md:pt-12">Monto que solicitas</h1>

                <div className="grid grid-cols-2 p-4 gap-4 place-items-center md:flex flex-col justify-center items-center pt-4 md:pt-2">
                    <div className="w-[152px] md:w-[214px]">
                        <AppSlider
                            type='Prestamo'
                            coin={true}
                            value={amount}
                            onValueChange={newValue => setAmount(newValue)}
                            size='responsive'
                            limit={100000}
                            step={1000}
                            min={1000}
                        />
                    </div>

                    <div className="w-[152px] md:w-[214px]">
                        <AppSlider
                            type='Ingresos'
                            coin={true}
                            value={income}
                            onValueChange={newValue => setIncome(newValue)}
                            size='responsive'
                            limit={100000}
                            step={1000}
                            min={1000}
                        />
                    </div>


                    <div className="w-[152px] md:w-[214px]">
                        <AppSlider
                            type='Plazo'
                            value={term}
                            onValueChange={newValue => setTerm(newValue)}
                            size='responsive'
                            limit={18}
                            min={1}
                        />
                    </div>

                    <div className="md:p-14">
                        <AppSelect
                            tagLabel='Tipo de pago'
                            title="Tipo de pago"
                            items={pagos}
                            width={'w-[152px] md:w-[214px]'}
                            selected={paySelected}
                            setSelected={setPaySelected}
                        />
                    </div>
                </div>

            </div>

            <div style={{ backgroundColor: colors.fdoCalido }}
                className="flex flex-col w-full h-full md:rounded-tr-[25px] md:rounded-bl-[0px] rounded-bl-[25px] rounded-br-[25px] border-gray-300 border-2 md:border-l-0 border-l-2 md:border-t-2 border-t-0">
                <div style={{ font: 'normal normal 600 17px/21px Inter', color: colors.logo }}
                    className={`grid grid-cols-2 text-center gap-4 md:gap-12 md:flex flex-row justify-around items-center p-10 `}>
                    <div className="flex flex-col gap-0 md:gap-3">
                        <span>Tasa anual (%)</span><br />
                        <span style={{ font: 'normal normal normal 25px/26px Inter', color: "black" }}>{`${product[0]?.tasa.anual}%`} </span>
                    </div>

                    <div className="flex flex-col md:gap-3">
                        <span>{paySelected}</span><br />
                        <span style={{ font: 'normal normal normal 25px/26px Inter', color: "black" }}>{paySelected === "Pagos Mensuales" ? monthPayFinal : fortnightlyPayFinal}</span>
                    </div>

                    <div className="flex flex-col md:gap-3">
                        <span>Pago Total (Aprox.)</span><br />
                        <span style={{ font: 'normal normal normal 25px/26px Inter', color: "black" }}>{totalPayVisual}</span>
                    </div>

                    <div className="flex flex-col md:gap-3">
                        <span>Comisión por apertura</span><br />
                        <span style={{ font: 'normal normal normal 25px/26px Inter', color: "black" }}>{`${product[0]?.comision}%`}</span>
                    </div>
                </div>

                <div className="mx-4 md:mx-8 border"></div>
                <div
                    className="md:hidden relative flex justify-center bottom-4"
                    onClick={onHiddeResponsive}
                >{accordion ? <IoIosArrowDropdownCircle size={30} fill={colors.resalte1} /> : <IoIosArrowDropupCircle size={30} fill={colors.resalte1} />}</div>

                {imageBanner ? imageBanner : <div className={` ${accordion ?
                    'relative animate-fade-down animate-ease-in animate-delay-0 hidden md:flex'
                    :
                    'flex flex-row animate-fade-down animate-ease-in animate-delay-0'}`}>

                    <div
                        style={{ font: 'normal normal normal 15px/20px Inter', color: colors.brand1 }}
                        className="flex flex-col text-center p-6 gap-4 md:gap-10"
                    ><div className="flex flex-col md:flex-row gap-4">
                            <div>{text1}</div>
                            <div>{text2}</div>
                        </div>

                        <div style={{ font: 'normal normal normal 15px/20px Inter', color: colors.brand1 }} className="text-center">
                            {text3}
                        </div>
                    </div>

                </div>}

                <div className="flex justify-center items-center py-10">
                    <a href={link} target="_blank">
                        <AppButton tag="Continuar solicitud" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default InformativeCard