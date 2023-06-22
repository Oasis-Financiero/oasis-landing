import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import colors from '../../../constants/colors';
import '../Dropdown/Dropdown.css'


const AppAccordion = ({ question, answer, elevation, background, line, color, square, radius }) => {


    return (
        <div className='border-b-4 p-2'>
            <Accordion
                elevation={elevation ? elevation : 0}
                square={square ? square : true}
                sx={{
                    borderBottom: `${line ? line : '1px solid black'}`,
                    backgroundColor: `${background ? background : 'transparent'}`,
                    borderRadius: `${radius ? radius : 0}`
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus
                        style={{
                            fill: colors.resalte1,
                            fontSize: 25,
                        }}
                    />}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 'bold',
                            color: `${color ? color : colors.brand1}`
                        }}
                        className="font-bold"
                    >
                        {question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                >
                    <Typography
                    sx={{
                        font: 'normal normal normal 15px/22px Inter'
                    }}
                    >
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )

}

export default AppAccordion