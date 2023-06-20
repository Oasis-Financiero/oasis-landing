import React from 'react';
import AppAccordion from '../Accordion/Accordion';

const AppFaq = () => {


    return (
        <div className='md:flex md:justify-center md:gap-16'>
            <div className='md:w-[470px]'>
                <AppAccordion
                    question='¿Cuáles son los requisitos para un préstamo personal?'
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
                <AppAccordion
                    question='¿Cómo obtener un préstamo?'
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
                <AppAccordion
                    question='¿Cómo se calcula el CAT anual?'
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
            </div>

            <div className='md:w-[470px]'>
                <AppAccordion
                    question='¿Puedo pagar mi préstamo de forma anticipada?'
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
                <AppAccordion
                    question='¿Cómo funcionan los préstamos personales?'
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
            </div>


        </div>
    );
};

export default AppFaq;

