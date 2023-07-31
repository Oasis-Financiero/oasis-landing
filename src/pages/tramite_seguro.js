import React from "react";
import Layout from "../components/layout";
import AppStepper from "../components/styled/Stepper/Stepper";
import AppSelect from '../components/styled/Dropdown/Dropdown'
import AppTextBox from '../components/styled/TextBox/TextBox'
import colors from "../constants/colors";

const Tramite = () => {

    const steps = ["Tipo de seguro y datos del vehiculo", "Datos Solicitante", "Confirmar Solicitud"]



    return (
        <Layout page='tramite'>
            <div className="flex flex-col gap-6 justify-center items-center">
                <h1>Cotiza un seguro especial</h1>
                <AppStepper
                    steps={steps}
                />

                <div className="flex flex-col justify-center items-center">
                    <h2>Tipo de seguro y datos de tu vehiculo</h2>
                    <div></div>

                    <div >
                        <div>

                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-1">
                                <AppSelect
                                    items={["hola", "adios"]}
                                    tagLabel="Tipo de vehiculo"
                                    width="273px"
                                />
                                <AppSelect
                                    items={["hola", "adios"]}
                                    tagLabel="Marca"
                                />
                                <AppSelect
                                    items={["hola", "adios"]}
                                    tagLabel="Modelo"
                                />
                                <AppSelect
                                    items={["hola", "adios"]}
                                    tagLabel="Anio"
                                />
                                <AppSelect
                                    items={["hola", "adios"]}
                                    tagLabel="Costo vehiculo (valor factura)"
                                />
                                <AppSelect
                                    items={["hola", "adios"]}
                                    tagLabel="Numero pasajeros"
                                />
                            </div>
                            <div className="w-full">
                                <textarea className="w-[556px] h-[96px]" style={{ border: `2px solid ${colors.resalte1}` }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Tramite