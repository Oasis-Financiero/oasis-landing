import React from 'react';
import AppAccordion from '../Accordion/Accordion';

const AppFaq = () => {


    const menuItems = [
        {
            question: '¿Cómo funcionan los préstamos personales?',
            answer:
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            question: '¿Cómo obtener un préstamo?',
            answer:
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            question: '¿Cómo se calcula el CAT anual?',
            answer:
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
    ];

    const menuItems2 = [
        {
            question: '¿Cuáles son los requisitos para un préstamo personal?',
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            question: '¿Puedo pagar mi préstamo de forma anticipada?',
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
    ]

    return (
        <div className='flex justify-center'>
            <AppAccordion
                item={menuItems}
                item2={menuItems2}
            />
        </div>
    );
};

export default AppFaq;

