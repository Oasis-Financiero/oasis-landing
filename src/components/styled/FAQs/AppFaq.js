import React from 'react';
import AppAccordion from '../Accordion/Accordion';
import answers from './anwers';

const AppFaq = () => {


    return (
        <div className='md:flex md:justify-center md:gap-16'>
            <div className='md:w-[470px]'>
                <AppAccordion
                    question='¿Cuáles son los requisitos para un préstamo personal?'
                    answer={answers.requisitos}
                />
                <AppAccordion
                    question='¿Cómo obtener un préstamo?'
                    answer={answers.obtener}
                />
                <AppAccordion
                    question='¿Cómo se calcula el CAT anual?'
                    answer={answers.cat}
                />
            </div>

            <div className='md:w-[470px]'>
                <AppAccordion
                    question='¿Puedo pagar mi préstamo de forma anticipada?'
                    answer={answers.pago}
                />
                <AppAccordion
                    question='¿Cómo funcionan los préstamos personales?'
                    answer={answers.personales}
                />
            </div>


        </div>
    );
};

export default AppFaq;

