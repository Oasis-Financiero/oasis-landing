import React, { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { createTheme } from "@mui/material";
import colors from "../../../constants/colors";
import AppButton from "../ConfirmButton/AppButton";



export const AppStepper = ({ steps }) => {

    const [isCompleted, setIsCompleted] = useState(false)
    const [stepsActive, setStepsActive] = useState(0)


    const onHandleCompleted = () => {
        if (stepsActive !== steps.length) {
            setStepsActive(stepsActive + 1)
        } if (stepsActive === steps.length - 1)
            setIsCompleted(true)
    }

    const onBackHandleCompleted = () => {
        if (stepsActive !== 0) {
            setStepsActive(stepsActive - 1)
            setIsCompleted(false)
        }
    }


    return (
        <div className="md:w-[60%]">

            <Stepper activeStep={stepsActive} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label} sx={{
                        '& .MuiStepLabel-root .Mui-completed': {
                            color: colors.resalte1,
                        },
                        '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                        {
                            color: colors.resalte1,
                            font: 'normal normal 600 16px/17px Inter'
                        },
                        '& .MuiStepLabel-root .Mui-active': {
                            color: colors.resalte1,
                        },
                        '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                        {
                            color: colors.brand1,
                            font: 'normal normal 600 16px/17px Inter'
                        },
                        '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel':
                        {
                            font: 'normal normal 600 16px/17px Inter',
                        },
                        '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                            fill: 'white',
                        },

                    }}
                        completed={isCompleted}

                    >
                        <StepLabel className="text-center">{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div onClick={() => onHandleCompleted()}><AppButton /></div>
            <div onClick={() => onBackHandleCompleted()}><AppButton /></div>
        </div>
    )
}

export default AppStepper