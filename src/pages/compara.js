import React from "react";
import Layout from "../components/layout";
import Calculator from "../components/calculator";
// import wallet from '../images/landing/wallet.svg'
import * as style from './compara.module.css'



const Compara = () => {

    return (
        <Layout page='compara'>
            <div className='flex flex-col justify-center md:flex md:justify-center md:items-center'>

                <div className="md:flex md:flex-col md:justify-center md:items-start md:p-[100px]">
                <h1 id={style.title}>Préstamos personales para <span id={style.word}>surfear</span> las emergencias</h1>
                    <div className="flex flex-col gap-12 p-3 md:flex md:flex-row md:gap-2">
                        <Calculator/>
                        <Calculator/>
                    </div>
                </div>



            </div>
        </Layout>
    )
}

export default Compara