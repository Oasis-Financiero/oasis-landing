import React from "react";
import AppAccordion from "../Accordion/Accordion";
import colors from "../../../constants/colors";
import AppLinedCard from "../LinedCard/LinedCard";


const RelevantPoints = () => {
    return (
       

            <div className="w-full flex flex-col justify-center items-center gap-10 p-10">

                <h1 className="text-center" style={{
                    font: 'normal normal 600 40px/50px Poppins'
                }}>6 Puntos Relevantes</h1>
                <div className="hidden md:grid md:grid-cols-3 md:place-items-center md:gap-10">
                    <AppLinedCard
                        title="1. Cobertura adecuada"
                        subtitle="Verifica que incluya tanto la responsabilidad civil como la cobertura de colisión y daños, protección contra robos, etc. Guíate por la cobertura."
                    />

                    <AppLinedCard
                        title="2. Costo y deducible"
                        subtitle="Considera el costo total del seguro, incluyendo prima mensual o anual, así como el deducible: la cantidad que deberás pagar de tu bolsillo en caso de un incidente."
                    />

                    <AppLinedCard
                        title="3. Reputación"
                        subtitle="Consulta opiniones y testimonios de otros clientes de la compañía de seguros para evaluar su confiabilidad y eficiencia en el manejo de reclamaciones."
                    />

                    <AppLinedCard
                        title="4. Servicio al cliente"
                        subtitle="Asegúrate de que sean accesibles y brinden asistencia rápida y eficiente en caso de accidentes, consultas o reclamaciones."
                    />

                    <AppLinedCard
                        title="5. Otros beneficios"
                        subtitle="Algunas compañías ofrecen servicios de asistencia en carretera, reemplazo de vehículo de alquiler y descuentos por buenos conductores."
                    />

                    <AppLinedCard
                        title="6. Compara opciones"
                        subtitle="Compara siempre diferentes compañías para obtener la mejor relación calidad-precio. Utiliza Oasis Financiero, consulta a agentes y compara coberturas, costos y beneficios."
                    />
                </div>

                <div className="md:hidden">
                    <AppAccordion
                        question="1. Cobertura adecuada"
                        answer="Verifica que incluya tanto la responsabilidad civil como la cobertura de colisión y daños, protección contra robos, etc. Guíate por la cobertura."
                        elevation={2}
                        line={true}
                        color={colors.resalte1}
                        square={true}
                        background="white"
                        radius='25px'
                        w="336px"
                        h="66px"
                    />

                    <AppAccordion
                        question="2. Costo y deducible"
                        answer="Considera el costo total del seguro, incluyendo prima mensual o anual, así como el deducible: la cantidad que deberás pagar de tu bolsillo en caso de un incidente."
                        elevation={2}
                        color={colors.resalte1}
                        line={true}
                        square={true}
                        radius='25px'
                        h="66px"
                        background="white"
                    />

                    <AppAccordion
                        question="3. Reputación"
                        answer="Consulta opiniones y testimonios de otros clientes de la compañía de seguros para evaluar su confiabilidad y eficiencia en el manejo de reclamaciones."
                        elevation={2}
                        background="white"
                        color={colors.resalte1}
                        square={true}
                        radius='25px'
                        h="66px"
                        line={true}
                    />

                    <AppAccordion
                        question="4. Servicio al cliente"
                        answer="Asegúrate de que sean accesibles y brinden asistencia rápida y eficiente en caso de accidentes, consultas o reclamaciones."
                        elevation={2}
                        background="white"
                        color={colors.resalte1}
                        square={true}
                        radius='25px'
                        h="66px"
                        line={true}
                    />

                    <AppAccordion
                        question="5. Otros beneficios"
                        answer="Algunas compañías ofrecen servicios de asistencia en carretera, reemplazo de vehículo de alquiler y descuentos por buenos conductores."
                        elevation={2}
                        background="white"
                        color={colors.resalte1}
                        square={true}
                        radius='25px'
                        h="66px"
                        line={true}
                    />

                    <AppAccordion
                        question="6. Compara opciones"
                        answer="Compara siempre diferentes compañías para obtener la mejor relación calidad-precio. Utiliza Oasis Financiero, consulta a agentes y compara coberturas, costos y beneficios."
                        elevation={2}
                        color={colors.resalte1}
                        background="white"
                        line={true}
                        radius='25px'
                        h="66px"
                        square={true}
                    />
                </div>

            </div>

        
    )
}

export default RelevantPoints