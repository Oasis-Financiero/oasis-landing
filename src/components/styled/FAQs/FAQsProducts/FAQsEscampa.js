import React from 'react';
import AppAccordion from '../../Accordion/Accordion';
import { answers } from './answersEscampa';



const AppEscampa = () => {


    return (
        <div className='md:flex md:justify-center md:gap-16'>
            <div className='md:w-[470px]'>
                <AppAccordion
                    question='¿Qué es Escampa?'
                    answer={answers.escampa}
                />
                <AppAccordion
                    question='
                    ¿Cuáles son los requisitos de Escampa para pedir un préstamo?'
                    answer={answers.requisitos}
                />
                <AppAccordion
                    question='¿Se requiere aval o garantías para obtener un préstamo?'
                    answer={answers.aval}
                />
                <AppAccordion
                    question='¿Qué opciones de pago tengo disponible?'
                    answer={answers.disponible}
                />
            </div>

            <div className='md:w-[470px]'>
                <AppAccordion
                    question='¿En qué plazos puedo pagar el préstamo?'
                    answer={answers.plazos}
                />
                <AppAccordion
                    question='¿Puedo realizar pagos anticipados sin penalización?'
                    answer={answers.anticipado}
                />
                <AppAccordion
                    question='¿Cuál es el rango de montos disponibles para préstamos?'
                    answer={answers.rango}
                />
                <AppAccordion
                    question='¿Cuándo recibiré el depósito del préstamo autorizado?'
                    answer={answers.aut}
                />
            </div>


        </div>
    );
};

export default AppEscampa;

