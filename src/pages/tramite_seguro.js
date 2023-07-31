import React from "react";
import Layout from "../components/layout";
import AppStepper from "../components/styled/Stepper/Stepper";

const Tramite = () => {

    const steps = ["Tipo de seguro y datos del vehiculo", "Datos Solicitante", "Confirmar Solicitud"]

    return (
        <Layout page='tramite'>
            <div className="flex flex-col gap-6 justify-center items-center">
                <h1>Cotiza un seguro especial</h1>
                <AppStepper
                    steps={steps}
                />
            </div>
        </Layout>
    )
}

export default Tramite