import React from "react";
import AppTextBox from "../TextBox/TextBox";
import * as styles from './ContactForm.module.css'
import colors from "../../../constants/colors";
import AppButton from "../ConfirmButton/AppButton";

const ContactForm = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-center" id={styles.title}>¿Tienes dudas? <span style={{ color: colors.resalte1 }}>Contáctanos</span></h1>

            <div className="flex md:flex-row gap-10 justify-center items-center flex-col">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-4">
                        <AppTextBox
                            label="Tu nombre" />

                        <AppTextBox
                            label="Correo electronico" />
                    </div>
                    <div className="w-[250px]">
                        <AppTextBox
                            label="Mensaje"
                            size="contactMessage"
                        />
                    </div>
                </div>
                <AppButton 
                tag="Contactar"
                />
            </div>
        </div>
    )
}

export default ContactForm