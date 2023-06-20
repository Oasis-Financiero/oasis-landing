import React from "react";
import Layout from "../components/layout";
import Calculator from "../components/calculator";
import wallet from '../images/herramientas/img-prestamos-personales-main.webp'
import * as style from './compara.module.css'
import AppFaq from "../components/styled/FAQs/AppFaq";



const Compara = () => {

    return (
        <Layout page='compara'>
            <div className='flex flex-col justify-center md:flex md:justify-center md:items-center'>
                <div className="md:flex md:flex-col md:justify-center md:items-start md:p-[100px]">
                    <h1 id={style.title}>Préstamos personales para <span id={style.word}>surfear</span> las emergencias</h1>
                    <div className="flex flex-col justify-center items-center p-2 md:flex md:flex-row md:gap-4">
                        <Calculator />
                        <div className="max-md:hidden md:w-[503px] md:h-[497px] md:relative md:bottom-3">
                            <img
                                src={wallet}
                                alt="wallet"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-2">
                <h1 className="flex justify-center" id={style.faq}>FAQs</h1>
                <AppFaq/>
            </div>
        </Layout>
    )
}

export default Compara