import React from "react";
import Container from '@mui/material/Container';
import { Box } from "@mui/material";
import './CardSection.modules.css'



const AppCardSection = ({ color, icon, title, subtitle }) => {
    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{
                    bgcolor: color,
                    height: '120px',
                    width: '249px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6
                }}
                >


                <div className="flex flex-row justify-center items center">
                    <img style={{
                        width: 100,
                        display:'flex',
                        padding: 10,  
                    }} src={icon} alt="icon"/>


                    <div className="flex flex-col justify-center text-start">
                        <span style={{
                            fontFamily: 'Poppins',
                            fontWeight: 'bolder',
                            fontSize: 12
                        }}>{title}</span>
                        <span style={{
                            fontFamily: 'Inter',
                            fontSize: 13
                        }}>{subtitle}</span>
                    </div>

                </div>

                </Box>
            </Container>
        </>
    )
}

export default AppCardSection