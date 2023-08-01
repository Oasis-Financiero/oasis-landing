import React from "react";
import { Box } from "@mui/material";
import './CardSection.modules.css'



const AppCardSection = ({ color, icon, title, subtitle }) => {
    return (
        <>
            
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
                        padding: 15,  
                    }} src={icon} alt="icon"/>


                    <div className="flex flex-col justify-center text-start">
                        <span style={{
                            fontFamily: 'Poppins',
                            fontWeight: 'bolder',
                            fontSize: 14,
                            textAlign: 'center'
                        }}>{title}</span>
                        <span style={{
                            fontFamily: 'Inter',
                            fontSize: 13,
                            textAlign: 'center'
                            
                        }}>{subtitle}</span>
                    </div>

                </div>

                </Box>
           
        </>
    )
}

export default AppCardSection