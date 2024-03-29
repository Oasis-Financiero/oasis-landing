import React from "react";
import Layout from "../components/layout";
import saly from '../images/about/Saly-15.png'
import colors from "../constants/colors";
import elige from '../images/about/1.svg'
import compara from '../images/about/2.svg'
import aprende from '../images/about/3.svg'

const Nosotros = () => {
    return (
        <Layout page='about'>
            <div className="animate-fade-down flex flex-col justify-center w-full items-center lg:px-12 lg:py-10 gap-5">
                <div className="flex flex-col-reverse lg:flex-row justify-center w-full items-center">
                    <div className="text-center lg:text-start px-12 flex flex-col justify-center items-center w-full">
                        <h1 className="lg:text-[53px] text-[28px] w-full lg:w-[500px]" style={{ fontFamily: 'Manrope', color: colors.brand1 }}>Transforma tu vida financiera</h1>
                        <h3 className="text-[20px] w-full lg:w-[500px]" style={{ color: colors.brand2, fontFamily: 'Poppins' }}>
                            Oasis es el primer sitio en México que te acompaña paso a paso en el viaje para mejorar tus finanzas.
                            <span style={{ color: colors.resalte1 }}>
                                {" Sin costos. Sin complicaciones."}
                            </span>
                        </h3>
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <img src={saly} alt="saly" className="w-[400px] lg:w-[550px] flex justify-center items-center" />
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center gap-6 text-center px-8 md:py-16">
                    <h3 style={{ color: colors.resalte1, fontFamily: 'Manrope' }}
                        className="text-[28px]"
                    >¿Por qué Oasis?</h3>
                    <h1 style={{ color: colors.brand1, fontFamily: 'Manrope' }}
                        className="lg:text-[53px]"
                    >Te ayudaremos a tomar mejores decisiones financieras</h1>
                    <h2 style={{ color: colors.brand1, fontFamily: 'Poppins' }}
                        className="lg:text-[20px] font-light">Creemos en el cambio de paradigmas dentro del ecosistema
                        financiero, innovando y promoviendo la inclusión
                        financiera en México.</h2>
                </div>

                <div className="w-full flex flex-col gap-6 justify-center items-center p-2">
                    <div className="flex flex-col md:flex-row p-10 gap-10 rounded-[8px] items-center"
                        style={{ backgroundColor: colors.fdoCalido }}
                    >
                        <img src={aprende} alt="image1" className="md:w-[150px] w-[80px]" />
                        <div className="flex flex-col w-full lg:w-[500px] justify-center gap-4 md:text-start text-center">
                            <h1 className="text-[18px] font-light"
                                style={{ color: colors.resalte1, fontFamily: 'Poppins' }}
                            >1. Aprende</h1>
                            <h3 className="lg:text-[22px] text-[18px]"
                                style={{ color: colors.brand1 }}
                            >Adquiere conocimientos sobre finanzas personales,
                                ahorro inteligente y las empresas que están innovando
                                para el beneficio de tu economía.</h3>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row p-10 gap-10 rounded-[8px] items-center"
                        style={{ backgroundColor: colors.fdoCalido }}
                    >
                        <img src={compara} alt="image1" className="lg:w-[150px] w-[80px]" />
                        <div className="flex flex-col w-full lg:w-[500px] justify-center gap-4 md:text-start text-center">
                            <h1 className="text-[18px] font-light"
                                style={{ color: colors.resalte1, fontFamily: 'Poppins' }}
                            >2. Compara</h1>
                            <h3 className="md:text-[22px] text-[18px]"
                                style={{ color: colors.brand1 }}
                            >Toma el control y personaliza tu experiencia. Solo
                                te mostraremos la información relevante y opciones
                                que deseas comparar.</h3>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row p-10 gap-10 rounded-[8px] items-center"
                        style={{ backgroundColor: colors.fdoCalido }}
                    >
                        <img src={elige} alt="image1" className="md:w-[150px] w-[80px]" />
                        <div className="flex flex-col w-full md:w-[500px] justify-center gap-4 md:text-start text-center">
                            <h1 className="text-[18px] font-light"
                                style={{ color: colors.resalte1, fontFamily: 'Poppins' }}
                            >3. Elige</h1>
                            <h3 className="md:text-[22px] text-[18px]"
                                style={{ color: colors.brand1 }}
                            >Aplica para el producto que mejor se adapta a tus necesidades.
                                Desde nuestra página podrás obtener toda la información
                                antes de contratar.</h3>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Nosotros