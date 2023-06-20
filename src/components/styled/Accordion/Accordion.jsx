import React from 'react';
import { FaPlus } from 'react-icons/fa'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import colors from '../../../constants/colors';
import '../Dropdown/Dropdown.css'


const AppAccordion = ({ item, item2 }) => {


    const accordion = item.map((items) => {

        return <div className='border-b-4 p-2'>

            <Accordion
                elevation={0}
                sx={{
                    maxWidth: 500,
                    borderBottom: '1px solid black'
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus style={{ fill: colors.resalte1, fontSize: 25 }}
                    />}
                >
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight:'bold' }} className="font-bold">
                        {items.question}<span style={{color: 'transparent'}}>...............................</span>
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

    const accordion2 = item2.map((items) => {

        return <div className='border-b-4 p-2'>

            <Accordion
                elevation={0}
                sx={{
                    maxWidth: 500,
                    borderBottom: '1px solid black'
                }}
            >
                <AccordionSummary
                    expandIcon={<FaPlus style={{ fill: colors.resalte1, fontSize: 25 }}
                        id="panel1bh-header"
                    />}
                >
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight:'bold' }}>
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

            <div>
                {accordion2}
            </div>
        </div>

    )
}

export default AppAccordion