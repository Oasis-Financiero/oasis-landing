import React from "react";
import Layout from "../components/layout";
import Calculator from "../components/calculator";
import wallet from '../images/landing/wallet.svg'
import * as style from './compara.module.css'



const Compara = () => {
    return (
        <Layout page='compara'>
            <h1 id="title">Préstamos personales para surfear las emergencias</h1>
            <div className='grid grid-cols-1 place-items-center md:flex flex-row justify-center'>
                <Calculator />
                <Calculator />
            </div>
        </Layout>
    )
}

export default Compara