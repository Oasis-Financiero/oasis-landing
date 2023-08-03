import React, { useState } from "react";
import app from '../../../../images/seguros/app.webp'
import turismo from '../../../../images/seguros/turismo.webp'
import taxi from '../../../../images/seguros/taxi.webp'
import moto from '../../../../images/seguros/moto.webp'
import pick from '../../../../images/seguros/pick.webp'
import camion from '../../../../images/seguros/camion.webp'
import chasis from '../../../../images/seguros/chasis.webp'
import especial from '../../../../images/seguros/especial.webp'
import Layout from "../../../../components/layout";
import AppStepper from "../../../../components/styled/Stepper/Stepper";
import colors from "../../../../constants/colors";
import AppTextBox from '../../../../components/styled/TextBox/TextBox'
import AppSelect from '../../../../components/styled/Dropdown/Dropdown'
import AppButton from "../../../../components/styled/ConfirmButton/AppButton";
import AppSecondaryButton from '../../../../components/styled/SecondaryButton/SecondaryButton'
import AppFaqAutos from "../../../../components/styled/FAQs/AppFaqAutos";
import { db } from "../../../../../firebase";
import { collection, addDoc } from "@firebase/firestore";
import { Link } from "gatsby";
import ContactForm from "../../../../components/styled/ContactForm/ContactForm";

const SeguroEspecial = () => {
    const steps = ["Tipo de seguro y datos del vehiculo", "Datos Solicitante", "Confirmar Solicitud"]

    let type, selected, title, image;
    if (typeof window !== "undefined") {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        type = urlParams.get('type')
    }

    const [formPage, setFormPage] = useState(1)
    const [isCompleted, setIsCompleted] = useState(false);
    const [stepsActive, setStepsActive] = useState(0);
    const [error, setError] = useState(false)

    const onBackHandleCompleted = () => {
        if (stepsActive !== 0) {
            setStepsActive(stepsActive - 1);
            setIsCompleted(false);
            setFormPage(formPage - 1)
        }
    };

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
    const [carValue, setCarValue] = useState("")
    const [brand, setBrand] = useState("")
    const [pasajeros, setPasajeros] = useState("")
    const [year, setYear] = useState("")
    const [adapt, setAdapt] = useState("")

    const handleCarData = (e) => {
        e.preventDefault()
        if (!model.length || !carValue || carValue < 5000 || !brand || !pasajeros || pasajeros < 1 || !year || year < 1600) {
            setError(true)
        } else {
            setCarData({
                ...carData,
                carType: selected,
                brand: brand,
                carModel: model,
                passengers: pasajeros,
                year: year,
                carValue: carValue,
                adaptations: adapt
            })
            setFormPage(formPage + 1)
            setError(false)
            if (stepsActive !== steps.length) {
                setStepsActive(stepsActive + 1);
            }
            if (stepsActive === steps.length - 1) {
                setIsCompleted(true);
            }
            if (setFormPage === setPasajeros.length) {
                return null
            }
        }

    }


    const screenOne = <div className="flex flex-col justify-center items-center md:w-[961px] rounded-[25px] bg-white relative"
        style={{ border: `1px solid ${colors.gris}` }}
    >
        <h2 className="md:p-10 p-6 text-center" style={{ color: colors.brand1, font: 'normal normal 600 18px Poppins' }}>Tipo de seguro y datos de tu vehiculo</h2>
        <div className="border border-black md:w-[842px] w-[150px] mb-8" style={{ borderColor: colors.gris }}></div>

        <div className="flex flex-col md:flex-row justify-center gap-5">
            <div className="flex flex-col relative">
                <img src={image} alt={type} className="w-[234px] h-[261px] object-cover rounded-[12px]" />
                <p className="absolute top-44 left-12 text-center text-white" style={{ font: 'normal normal medium 18px/22px Inter' }}>{title}</p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 w-full gap-2">
                <AppSelect
                    items={[selected]}
                    selected={selected}
                />
                <AppTextBox
                    label="Modelo"
                    onChangeValue={setModel}
                    value={model}
                    error={model.length > 2 ? false : error}

                />
                <AppTextBox
                    label="Costo de vehiculo (Factura)"
                    onChangeValue={setCarValue}
                    value={carValue.replace(/[a-zA-Z\W_]/g, '')}
                    error={carValue > 5000 ? false : error}
                    type="text"
                />

                <AppTextBox
                    label="Marca"
                    onChangeValue={setBrand}
                    value={brand}
                    error={brand.length > 2 ? false : error}

                />

                <AppTextBox
                    label="Año"
                    onChangeValue={setYear}
                    value={year.replace(/[a-zA-Z\W_]/g, '')}
                    error={year > 1400 ? false : error}
                    type="text"
                />

                <AppTextBox
                    label="Numero de pasajeros"
                    onChangeValue={setPasajeros}
                    value={pasajeros.replace(/[a-zA-Z\W_]/g, '')}
                    error={pasajeros > 0 ? false : error}
                    type="text"
                />

                <div className="relative">
                    <AppTextBox
                        label="Tiene adaptaciones? Describelas"
                        onChangeValue={setAdapt}
                        value={adapt}
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
    const [cp, setCp] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [genero, setGenero] = useState("Genero")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [razonSocial, setRazonSocial] = useState("")
    const [dataUser, setDataUser] = useState({})

    const handleOnDate = (e) => {
        e.preventDefault()
        setDate(e.target.value)
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const handleOnChangeData = (e) => {
        e.preventDefault()
        if (!cp || cp < 20 || !name || !lastName || !email || !number || number < 1000000 || genero === "Genero" || !date ) {
            setError(true)
        } else if (!emailRegex.test(email)) {
            alert("email incorrecto")
        } else {
            setDataUser({
                date: date,
                typePerson: selectedOptionsPerson,
                postalCode: cp,
                name: name,
                lastName: lastName,
                genero: genero,
                email, email,
                number: number,
                razonSocial: razonSocial
            })
            setError(false)
            setFormPage(formPage + 1)
            if (stepsActive !== steps.length) {
                setStepsActive(stepsActive + 1);
            }
            if (stepsActive === steps.length - 1) {
                setIsCompleted(true);
            }
        }

    }


    const screenTwo = <div className="flex flex-col justify-center items-center md:p-6 md:w-[961px] rounded-[25px] bg-white relative"
        style={{ border: `1px solid ${colors.gris}` }}
    >
        <div className="absolute left-5 top-4 md:top-10 md:left-10">
            <AppSecondaryButton
                back={true}
                onClick={onBackHandleCompleted}
            />
        </div>
        <h2 className="p-5 text-center">Datos del Solicitante</h2>
        <div className="border border-black md:w-[842px] w-[150px] m-8" style={{ borderColor: colors.gris }}></div>

        <div className="flex flex-col md:flex-row gap-11">
            <div className="flex flex-col relative justify-center items-center">
                <img src={image} alt={type} className="w-[234px] h-[111px] object-cover rounded-[12px]" />
                <p className="absolute text-center text-white flex top-7" style={{ font: 'normal normal medium 18px/22px Inter' }}>{title}</p>
                <div className="flex flex-col justify-start p-3 text-center" style={{ fontFamily: 'Inter' }}>
                    <p>{carData?.carType}</p>
                    <p>{carData?.selected}</p>
                    <p>{carData?.brand}</p>
                    <p>{carData?.carModel}</p>
                    <p>{carData?.passengers} pasajeros</p>
                    <p>{carData?.year}</p>
                </div>
            </div>

            {
                selectedOptionsPerson === "Soy Persona Moral" ?
                    <div className="flex flex-col p-2 gap-2 md:grid md:grid-cols-2 md:gap-1 md:w-[550px] md:p-0 ">

                        <AppSelect
                            items={person}
                            selected={selectedOptionsPerson}
                            setSelected={setSelectedOptionsPerson}
                            title={"Persona..."}
                            error={selectedOptionsPerson === "Persona..." ? error : false}
                            errorLabel="Campo obligatorio*"
                        />

                        <AppTextBox
                            label="Codigo Postal"
                            onChangeValue={setCp}
                            value={cp.replace(/[a-zA-Z\W_]/g, '')}
                            type="text"
                            error={cp > 20 ? false : error}
                        />


                        <AppTextBox
                            label="Razon Social"
                            onChangeValue={setRazonSocial}
                            value={razonSocial.toUpperCase()}
                            error={razonSocial.length > 2 ? false : error}
                            type="text"
                            required={true}
                        />

                        <AppTextBox
                            label="Nombre"
                            onChangeValue={setName}
                            value={name.replace(/[0-9]/g, '')}
                            error={name.length > 2 ? false : error}
                            type="text"
                        />


                        <div className="flex items-center p-2 gap-2 rounded-[7px] h-[45px]" style={{ border: error ? `2px solid red` : `2px solid ${colors.resalte1}` }}>
                            <label className="text-[13px]" style={{ fontFamily: 'Inter', color: colors.gris }}>Fecha de Nacimiento:</label>
                            <input type="date" name="birthday" onChange={handleOnDate} className="text-[13px]" style={{ color: colors.gris }} />
                        </div>

                        <AppSelect
                            items={gnre}
                            setSelected={setGenero}
                            selected={genero}
                            title={"Genero"}
                            error={genero === "Genero" ? error : false}
                            errorLabel="Campo obligatorio*"
                        />

                        <AppTextBox
                            label="Correo electronico"
                            onChangeValue={setEmail}
                            value={email}
                            error={email.length > 2 && emailRegex.test(email) ? false : error}
                        />

                        <AppTextBox
                            label="WhatsApp"
                            onChangeValue={setNumber}
                            value={number.replace(/[a-zA-Z\W_]/g, '')}
                            error={number > 2 ? false : error}
                            type="text"
                        />

                    </div>

                    :

                    <div className="flex flex-col p-2 gap-2 md:grid md:grid-cols-2 md:gap-1 md:w-[550px] md:p-0 ">

                        <AppSelect
                            items={person}
                            selected={selectedOptionsPerson}
                            setSelected={setSelectedOptionsPerson}
                            title={"Persona..."}
                            error={selectedOptionsPerson === "Persona..." ? error : false}
                            errorLabel="Campo obligatorio*"
                        />

                        <AppTextBox
                            label="Codigo Postal"
                            onChangeValue={setCp}
                            value={cp.replace(/[a-zA-Z\W_]/g, '')}
                            type="text"
                            error={cp > 20 ? false : error}
                        />


                        <AppTextBox
                            label="Nombre"
                            onChangeValue={setName}
                            value={name.replace(/[0-9]/g, '')}
                            error={name.length > 2 ? false : error}
                            type="text"
                        />

                        <AppTextBox
                            label="Apellido"
                            onChangeValue={setLastName}
                            value={lastName.replace(/[0-9]/g, '')}
                            error={lastName.length > 1 ? false : error}
                            type="text"
                        />


                        <div className="flex items-center p-2 gap-2 rounded-[7px] h-[45px]" style={{ border: error ? `2px solid red` : `2px solid ${colors.resalte1}` }}>
                            <label className="text-[13px]" style={{ fontFamily: 'Inter', color: colors.gris }}>Fecha de Nacimiento:</label>
                            <input type="date" name="birthday" onChange={handleOnDate} className="text-[13px]" style={{ color: colors.gris }} />
                        </div>

                        <AppSelect
                            items={gnre}
                            setSelected={setGenero}
                            selected={genero}
                            title={"Genero"}
                            error={genero === "Genero" ? error : false}
                            errorLabel="Campo obligatorio*"
                        />

                        <AppTextBox
                            label="Correo electronico"
                            onChangeValue={setEmail}
                            value={email}
                            error={email.length > 2 && emailRegex.test(email) ? false : error}
                        />

                        <AppTextBox
                            label="WhatsApp"
                            onChangeValue={setNumber}
                            value={number.replace(/[a-zA-Z\W_]/g, '')}
                            error={number > 2 ? false : error}
                            type="text"
                        />

                    </div>
            }

        </div>
        <div className="flex flex-col justify-center items-center p-8">
            <AppButton
                tag="Continuar"
                onClick={handleOnChangeData}
            />
        </div>
    </div>

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, "seguros especiales"), {
            ...dataUser, ...carData,
        })
        if (stepsActive !== steps.length) {
            setStepsActive(stepsActive + 1);
        }
        if (stepsActive === steps.length - 1) {
            setIsCompleted(true);
        }
        setFormPage(formPage + 1)
    }

    const screenThree = <div className="flex flex-col justify-center items-center py-4 md:p-6 md:w-[961px] rounded-[25px] bg-white relative"
        style={{ border: `1px solid ${colors.gris}` }}
    >
        <div className="absolute top-10 left-10">
            <AppSecondaryButton
                back={true}
                onClick={onBackHandleCompleted}
            />
        </div>
        <h2 className="p-5 text-center">Confirmar Solicitud</h2>
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
                    <p>{selectedOptionsPerson === "Soy Persona Fisica" ? dataUser?.name + " " + dataUser?.lastName : dataUser?.razonSocial}</p>
                    <p>{dataUser?.postalCode}</p>
                    <p>{dataUser?.date}</p>
                    <p>{dataUser?.genero}</p>
                </div>

            </div>

        </div>
        <div className="flex flex-col justify-center items-center p-8">
            <AppButton
                tag="Confirmar"
                onClick={handleSubmitForm}
            />
        </div>
    </div>

    const screenFour = <div className="flex flex-col justify-center items-center py-4 md:p-6 md:w-[961px] rounded-[25px] bg-white"
        style={{ border: `1px solid ${colors.gris}` }}
    >
        <div className="flex flex-col justify-center items-center gap-10 md:p-10 p-6">
            <h1 className="text-center"
                style={{ font: 'normal normal 600 30px/50px Poppins' }}
            >¡Gracias por completar el formulario!< br />
                Nos pondremos en contacto pronto para dar seguimiento a tu cotización.</h1>

            <Link to="/productos/seguros/auto"><AppButton
                tag="Volver al inicio"
            /></Link>
        </div>
    </div>

    let screenToShow;
    if (formPage === 1) {
        screenToShow = screenOne;
    } else if (formPage === 2) {
        screenToShow = screenTwo;
    } else if (formPage === 3) {
        screenToShow = screenThree;
    } else {
        screenToShow = screenFour
    }

    return (
        <Layout page='tramite'>
            <div className="flex flex-col gap-16 justify-center items-center w-full p-1 md:p-10" style={{ backgroundColor: colors.fdoGris }}>
                <h1
                    style={{ font: 'normal normal 600 40px/50px Poppins' }}
                    className="p-4 md:p-8 text-center"
                >
                    Cotiza un <span style={{ color: colors.resalte1 }}>seguro especial</span>
                </h1>
                <AppStepper
                    steps={steps}
                    stepsActive={stepsActive}
                    isCompleted={isCompleted}
                />
                {screenToShow}
            </div>
            <div className="py-12">
                <AppFaqAutos />
            </div>

            <div className="p-4">
                <ContactForm />
            </div>
        </Layout>
    )
}

export default SeguroEspecial;