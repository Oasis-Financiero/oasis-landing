import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import colors from '../../../constants/colors';
import '../Dropdown/Dropdown.css'


const AppAccordion = ({ item }) => {
    const [expanded, setExpanded] = useState(null)

    const handleChange = (index) => (event, isExpanded) => {
        setExpanded(isExpanded ? index : null)
    }

    const accordion = item.map((items, index) => {

        return <div className='border-b-4 p-2'>
            <Accordion
            expanded={expanded === index} onChange={handleChange(index)}
                elevation={0}
                square
                sx={{
                    maxWidth: 520,
                    borderBottom: '1px solid black',
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
                        {items.question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                >
                    <Typography>
                        {items.answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    })


    return (
        <div className='md:flex md:flex-row'>
            <div className="">
                {accordion}
            </div>
        </div>

    )
}

export default AppAccordion