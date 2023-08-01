import React from 'react';
import AppAccordion from '../Accordion/Accordion';
import answers from './answersAutos';

const AppFaqAutos = () => {


    return (
        <div className='md:flex md:justify-center md:gap-16'>
            <div className='md:w-[470px]'>
                <AppAccordion
                    question='¿Cuál es la cobertura mínima por ley?'
                    answer={answers.ley}
                />
                <AppAccordion
                    question='¿Qué tipo de cobertura es mejor para mí?'
                    answer={answers.mejor}
                />
                <AppAccordion
                    question='¿Qué sucede si tengo un accidente en otro estado o país?'
                    answer={answers.costo}
                />
            </div>

            <div className='md:w-[470px]'>
                <AppAccordion
                    question='¿Qué pasa si necesito asistencia en carretera?'
                    answer={answers.carretera}
                />
                <AppAccordion
                    question='¿Cuál es el costo total del seguro?'
                    answer={answers.pais}
                />
                <AppAccordion
                    question='¿Cómo se determina el valor total de mi vehículo en caso de pérdida total?'
                    answer={answers.valor}
                />
            </div>


        </div>
    );
};

export default AppFaqAutos;

