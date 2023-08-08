import React, { useState } from "react";
import AppTextBox from "../TextBox/TextBox";
import * as styles from './ContactForm.module.css'
import colors from "../../../constants/colors";
import AppButton from "../ConfirmButton/AppButton";
import axios from "axios";


const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    // Produccion
    const URL = 'https://formspree.io/f/xvojzqed' 

    // Test
    // const URL = 'https://formspree.io/f/xpzgqlek'

    console.log(name, email);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            name: name,
            email: email,
            message: message,
        };

        try {

            const response = await axios.post(`${URL}`, formData);
            console.log("Respuesta de Formspree:", response);
        } catch (error) {
            console.error("Error al enviar el formulario:", error); 
        }
    };


    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-center" id={styles.title}>¿Tienes dudas? <span style={{ color: colors.resalte1 }}>Contáctanos</span></h1>

            <div
                className="flex md:flex-row gap-10 justify-center items-center flex-col">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-4">
                        <AppTextBox
                            label="Tu nombre"
                            name="name"
                            onChangeValue={setName}
                            value={name}
                        />

                        <AppTextBox
                            label="Correo electronico"
                            name="email"
                            onChangeValue={setEmail}
                            value={email}
                        />
                    </div>
                    <div className="w-full">
                        <AppTextBox
                            label="Mensaje"
                            size="contactMessage"
                            name="message"
                            onChangeValue={setMessage}
                            value={message}
                        />
                    </div>
                </div>
                <AppButton
                    tag="Contactar"
                    type="submit"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
}

export default ContactForm