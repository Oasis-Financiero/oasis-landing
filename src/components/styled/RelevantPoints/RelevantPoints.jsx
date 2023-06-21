import React from "react";
import AppAccordion from "../Accordion/Accordion";
import colors from "../../../constants/colors";

const RelevantPoints = () => {
    return (
        <>
            <AppAccordion
                question="1. Cobertura adecuada"
                answer="Verifica que incluya tanto la responsabilidad civil como la cobertura de colisión y daños, protección contra robos, etc. Guíate por la cobertura."
                elevation={2}
                line={true}
                color={colors.resalte1}
                background="white"
            />

            <AppAccordion
                question="2. Costo y deducible"
                answer="Considera el costo total del seguro, incluyendo prima mensual o anual, así como el deducible: la cantidad que deberás pagar de tu bolsillo en caso de un incidente."
                elevation={2}
                color={colors.resalte1}
                line={true}
                background="white"
            />

            <AppAccordion
                question="3. Reputación"
                answer="Consulta opiniones y testimonios de otros clientes de la compañía de seguros para evaluar su confiabilidad y eficiencia en el manejo de reclamaciones."
                elevation={2}
                background="white"
                color={colors.resalte1}
                line={true}
            />

            <AppAccordion
                question="4. Servicio al cliente"
                answer="Asegúrate de que sean accesibles y brinden asistencia rápida y eficiente en caso de accidentes, consultas o reclamaciones."
                elevation={2}
                background="white"
                color={colors.resalte1}
                line={true}
            />

            <AppAccordion
                question="5. Otros beneficios"
                answer="Algunas compañías ofrecen servicios de asistencia en carretera, reemplazo de vehículo de alquiler y descuentos por buenos conductores."
                elevation={2}
                background="white"
                color={colors.resalte1}
                line={true}
            />

            <AppAccordion
                question="6. Compara opciones"
                answer="Compara siempre diferentes compañías para obtener la mejor relación calidad-precio. Utiliza Oasis Financiero, consulta a agentes y compara coberturas, costos y beneficios."
                elevation={2}
                color={colors.resalte1}
                background="white"
                line={true}
            />
        </>
    )
}

export default RelevantPoints