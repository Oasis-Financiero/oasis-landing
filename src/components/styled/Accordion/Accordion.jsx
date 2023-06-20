import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import colors from '../../../constants/colors';
import '../Dropdown/Dropdown.css'


const AppAccordion = ({ question, answer }) => {

    
        return (
        <div className='border-b-4 p-2'>
            <Accordion
                elevation={0}
                square
                sx={{
                    borderBottom: '1px solid black',
                    backgroundColor: 'transparent'
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus
                        style={{
                            fill: colors.resalte1,
                            fontSize: 25
                        }}
                    />}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 'bold'
                        }}
                        className="font-bold"
                    >
                        {question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                >
                    <Typography>
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )

}

export default AppAccordion