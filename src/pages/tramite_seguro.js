import React, { useState } from "react";
import Layout from "../components/layout";
import AppStepper from "../components/styled/Stepper/Stepper";
import colors from "../constants/colors";
import app from '../images/seguros/app.webp'
import turismo from '../images/seguros/turismo.webp'
import taxi from '../images/seguros/taxi.webp'
import moto from '../images/seguros/moto.webp'
import pick from '../images/seguros/pick.webp'
import camion from '../images/seguros/camion.webp'
import chasis from '../images/seguros/chasis.webp'
import especial from '../images/seguros/especial.webp'
import AppTextBox from '../components/styled/TextBox/TextBox'
import AppSelect from '../components/styled/Dropdown/Dropdown'

const Tramite = () => {

    const steps = ["Tipo de seguro y datos del vehiculo", "Datos Solicitante", "Confirmar Solicitud"]

    let type, selected, title, image;
    if (typeof window !== "undefined") {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        type = urlParams.get('type')
    }



    switch (type) {
        case 'turismo':
            title = <span>Transporte Turistico <br /> y de Personal</span>
            selected = 'Transporte de personal'
            image = turismo
            break;

        case 'taxi':
            selected = 'Taxi'
            title = 'Taxis'
            image = taxi
            break;

        case 'app':
            selected = 'Uber / Didi'
            title = <span>Transporte Apps <br /> (Uber / Didi)</span>
            image = app
            break;

        case 'moto':
            selected = 'Motocicletas'
            title = 'Motocicletas'
            image = moto
            break;

        case 'pick':
            selected = 'Pick Up de carga'
            title = <span>Pick Up <br /> de carga</span>
            image = pick
            break;

        case 'camion':
            selected = 'Camiones'
            title = <span>Camiones de <br /> 3.5 toneladas</span>
            image = camion
            break;

        case 'especial':
            selected = 'Chasis con adaptaciones'
            title = <span>Chasis con <br /> adaptaciones especiales</span>
            image = especial
            break;

        case 'chasis':
            selected = 'Chasis / Cabina'
            title = <span> Chasis <br /> Cabina</span>
            image = chasis
            break;

        default:
            selected = 'Transporte de personal'
            title = <span>Transporte Turistico <br /> y de Personal</span>
            image = turismo
            break;
    }

    const screenOne = <div className="grid grid-cols-2 place-items-center p-10">
        <AppSelect
            items={[selected]}
            selected={selected}
            width="md:w-[273px]"
        />
        <AppTextBox
            label="Marca"
        />
        <AppTextBox
            label="Modelo"
        />
        <AppTextBox
            label="Año"
        />
        <AppTextBox
            label="Costo de vehiculo"
        />
        <AppTextBox
            label="Numero de pasajeros"
        />
    </div>

    return (
        <Layout page='tramite_seguro'>
            <div className="flex flex-col gap-6 justify-center items-center w-full p-10" style={{ backgroundColor: colors.fdoGris }}>
                <h1>Cotiza un seguro especial</h1>
                <AppStepper
                    steps={steps}
                />

                <div className="flex flex-col justify-center items-center p-10 md:w-[961px] rounded-[25px] bg-white"
                    style={{ border: `1px solid ${colors.gris}` }}
                >
                    <h2 className="md:p-5 text-center">Tipo de seguro y datos de tu vehiculo</h2>
                    <div className="border border-black md:w-[842px] w-[150px] m-8" style={{ borderColor: colors.gris }}></div>

                    <div className="flex flex-col md:flex-row justify-center">
                        <div className="flex flex-col relative">
                            <img src={image} alt={type} className="w-[234px] h-[261px] object-cover rounded-[12px]" />
                            <p className="absolute top-44 left-12 text-center text-white" style={{ font: 'normal normal medium 18px/22px Inter' }}>{title}</p>
                        </div>

                        {screenOne}
                    </div>

                    
                </div>
            </div>
        </Layout>
    )
}

export default Tramite