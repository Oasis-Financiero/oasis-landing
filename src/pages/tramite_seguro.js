import React, { useState } from "react";
import app from '../images/seguros/app.webp'
import turismo from '../images/seguros/turismo.webp'
import taxi from '../images/seguros/taxi.webp'
import moto from '../images/seguros/moto.webp'
import pick from '../images/seguros/pick.webp'
import camion from '../images/seguros/camion.webp'
import chasis from '../images/seguros/chasis.webp'
import especial from '../images/seguros/especial.webp'
import Layout from "../components/layout";
import AppStepper from "../components/styled/Stepper/Stepper";
import colors from "../constants/colors";
import AppTextBox from '../components/styled/TextBox/TextBox'
import AppSelect from '../components/styled/Dropdown/Dropdown'
import AppButton from "../components/styled/ConfirmButton/AppButton";


const Tramite = () => {

    const steps = ["Tipo de seguro y datos del vehiculo", "Datos Solicitante", "Confirmar Solicitud"]


    let type, selected, title, image;
    if (typeof window !== "undefined") {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        type = urlParams.get('type')
    }

    const [formPage, setFormPage] = useState(1)




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





    const [model, setModel] = useState("")
    const [carData, setCarData] = useState({})
    const [carValue, setCarValue] = useState(null)
    const [brand, setBrand] = useState("")
    const [pasajeros, setPasajeros] = useState(null)
    const [year, setYear] = useState(null)

    const handleCarData = (e) => {
        e.preventDefault()
        setCarData({
            ...carData,
            carType: title,
            brand: brand,
            carModel: model,
            passengers: pasajeros,
            year: year,
            carValue: carValue,
        })
        if (setFormPage === setPasajeros.length) {
            return null
        } else {
            setFormPage(formPage + 1)
        }
    }

    const screenOne = <div className="flex flex-col justify-center items-center md:w-[961px] rounded-[25px] bg-white"
        style={{ border: `1px solid ${colors.gris}` }}
    >
        <h2 className="md:p-5 text-center">Tipo de seguro y datos de tu vehiculo</h2>
        <div className="border border-black md:w-[842px] w-[150px] m-8" style={{ borderColor: colors.gris }}></div>

        <div className="flex flex-col md:flex-row justify-center gap-5">
            <div className="flex flex-col relative">
                <img src={image} alt={type} className="w-[234px] h-[261px] object-cover rounded-[12px]" />
                <p className="absolute top-44 left-12 text-center text-white" style={{ font: 'normal normal medium 18px/22px Inter' }}>{title}</p>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-2">

                <div className="flex flex-col gap-2">
                    <AppSelect
                        items={[selected]}
                        selected={selected}
                    />
                    <AppTextBox
                        label="Modelo"
                        onChangeValue={setModel}
                        value={model}
                    />
                    <AppTextBox
                        label="Costo de vehiculo"
                        onChangeValue={setCarValue}
                        value={carValue}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <AppTextBox
                        label="Marca"
                        onChangeValue={setBrand}
                        value={brand}
                    />

                    <AppTextBox
                        label="Año"
                        onChangeValue={setYear}
                        value={year}
                    />

                    <AppTextBox
                        label="Numero de pasajeros"
                        onChangeValue={setPasajeros}
                        value={pasajeros}
                    />
                </div>

            </div>

        </div>
        <div className="flex flex-col justify-center items-center p-8">
            <AppButton
                tag="Continuar"
                onClick={handleCarData}
            />
        </div>
    </div>



    const person = ["Soy Persona Fisica", "Soy Persona Moral"]
    const gnre = ["Masculino", "Femenino"]
    const [selectedOptionsPerson, setSelectedOptionsPerson] = useState("Persona...")
    const [date, setDate] = useState(null)
    const [cp, setCp] = useState(null)
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [genero, setGenero] = useState("Genero")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [dataUser, setDataUser] = useState({})

    const handleOnDate = (e) => {
        e.preventDefault()
        setDate(e.target.value)
    }

    const handleOnChangeData = (e) => {
        e.preventDefault()
        setDataUser({
            ...dataUser,
            date: date,
            typePerson: selectedOptionsPerson,
            postalCode: cp,
            name: name,
            lastName: lastName,
            genero: genero,
            email, email,
            number: number,
        })
        if (setFormPage === setPasajeros.length) {
            return null
        } else {
            setFormPage(formPage + 1)
        }
    }


    console.log(dataUser);

    const screenTwo = <div className="flex flex-col justify-center items-center md:p-6 md:w-[961px] rounded-[25px] bg-white"
        style={{ border: `1px solid ${colors.gris}` }}
    >
        <h2 className="md:p-5 text-center">Datos del Solicitante</h2>
        <div className="border border-black md:w-[842px] w-[150px] m-8" style={{ borderColor: colors.gris }}></div>

        <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-col relative justify-center items-center w-full">
                <img src={image} alt={type} className="w-[234px] h-[111px] object-cover rounded-[12px]" />
                <p className="absolute text-center text-white flex top-7" style={{ font: 'normal normal medium 18px/22px Inter' }}>{title}</p>
                <div className="flex flex-col justify-start p-3">
                    <p>{carData?.carType}</p>
                    <p>{carData?.selected}</p>
                    <p>{carData?.brand}</p>
                    <p>{carData?.carModel}</p>
                    <p>{carData?.passengers} pasajeros</p>
                    <p>{carData?.year}</p>
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-1">
                <div className="w-[284px] flex flex-col gap-2">
                    <AppSelect
                        items={person}
                        selected={selectedOptionsPerson}
                        setSelected={setSelectedOptionsPerson}
                        title={selectedOptionsPerson}
                    />

                    <AppTextBox
                        label="Nombre"
                        onChangeValue={setName}
                        value={name}
                    />

                    <div className="flex items-center p-2 gap-2 rounded-[7px] h-[45px]" style={{ border: `2px solid ${colors.resalte1}` }}>
                        <label className="text-[13px]" style={{ fontFamily: 'Inter', color: colors.gris }}>Fecha de Nacimiento:</label>
                        <input type="date" name="birthday" onChange={handleOnDate} className="text-[13px]" style={{ color: colors.gris }} />
                    </div>

                    <AppTextBox
                        label="Correo electronico"
                        onChangeValue={setEmail}
                        value={email}
                    />
                </div>

                <div className="w-[284px] flex flex-col gap-2">
                    <AppTextBox
                        label="Codigo Postal"
                        onChangeValue={setCp}
                        value={cp}
                    />

                    <AppTextBox
                        label="Apellido"
                        onChangeValue={setLastName}
                        value={lastName}
                    />


                    <AppSelect
                        items={gnre}
                        setSelected={setGenero}
                        selected={genero}
                        title={genero}
                    />

                    <AppTextBox
                        label="WhatsApp"
                        onChangeValue={setNumber}
                        value={number}
                    />
                </div>

            </div>

        </div>
        <div className="flex flex-col justify-center items-center p-8">
            <AppButton
                tag="Continuar"
                onClick={handleOnChangeData}
            />
        </div>
    </div>

    const screenThree = <div className="flex flex-col justify-center items-center py-4 md:p-6 md:w-[961px] rounded-[25px] bg-white"
        style={{ border: `1px solid ${colors.gris}` }}
    >
        <h2 className="md:p-5 text-center">Confirmar Solicitud</h2>
        <div className="border border-black md:w-[842px] w-[150px] m-8" style={{ borderColor: colors.gris }}></div>

        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col relative justify-center items-center w-full">
                <img src={image} alt={type} className="w-[234px] h-[111px] object-cover rounded-[12px]" />
                <p className="absolute text-center text-white flex top-9 md:top-14" style={{ font: 'normal normal medium 18px/22px Inter' }}>{title}</p>
            </div>


            <div className="flex flex-col w-full justify-center items-center md:flex-row gap-2">
                <div className="flex flex-col gap-2 w-[234px] justify-center items-center">
                    <p>{carData?.carType}</p>
                    <p>{carData?.selected}</p>
                    <p>{carData?.brand}</p>
                    <p>{carData?.carModel}</p>
                    <p>{carData?.passengers} pasajeros</p>
                    <p>{carData?.year}</p>
                </div>

                <div className="w-[255px] md:h-[125px] md:w-0" style={{ border: `1px solid ${colors.gris}` }}></div>

                <div className="flex flex-col gap-2 w-[234px] justify-center items-center">
                    <p>{dataUser?.typePerson}</p>
                    <p>{dataUser?.name + " " + dataUser?.lastName}</p>
                    <p>{dataUser?.postalCode}</p>
                    <p>{dataUser?.date}</p>
                    <p>{dataUser?.genero}</p>
                </div>

            </div>

        </div>
        <div className="flex flex-col justify-center items-center p-8">
            <AppButton
                tag="Confirmar"
                onClick={handleOnChangeData}
            />
        </div>
    </div>


    let screenToShow;
    if (formPage === 1) {
        screenToShow = screenOne;
    } else if (formPage === 2) {
        screenToShow = screenTwo;
    } else {
        screenToShow = screenThree;
    }

    return (
        <Layout page='tramite'>
            <div className="flex flex-col gap-6 justify-center items-center w-full p-10" style={{ backgroundColor: colors.fdoGris }}>
                <h1>Cotiza un seguro especial</h1>
                <AppStepper
                    steps={steps}

                />

                {screenToShow}

            </div>
        </Layout>
    )
}

export default Tramite