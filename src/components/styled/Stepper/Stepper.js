import React, { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import colors from "../../../constants/colors";
import AppButton from "../ConfirmButton/AppButton";
import { BsCircleFill } from 'react-icons/bs'

const StepIcon = (props) => {
    const { active, completed, className } = props;

    const iconStyleActive = {
        fill: active ? colors.resalte1 : 'transparent',
        border: active ? 'none' : '1px solid gray',
    };

    const iconStyleCompleted = {
        fill: colors.resalte1
    }

    return (
        <div className={className}>
            {
                completed ?
                    < BsCircleFill style={iconStyleCompleted} className="rounded-[50%]" />
                    :
                    < BsCircleFill style={iconStyleActive} className="rounded-[50%]" />
            }
        </div>
    );
};

export const AppStepper = ({ steps, isCompleted, stepsActive }) => {
    

    const styleSx = {
        '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel':
        {
            font: 'normal normal 600 16px/17px Inter',
        },
        '.MuiStepLabel-iconContainer': {
            marginTop: "5px",
        },
        '.MuiStepConnector-root': {
            left: "calc(-50% + 10px)",
            right: "calc(50% + 10px)"
        },
        '.MuiStepConnector-line': {
            borderTopWidth: "2px"
        }
    }

    

    return (
        <div className="w-full">
            <Stepper activeStep={stepsActive} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label} completed={isCompleted}
                        sx={styleSx}>
                        <StepLabel
                            className="text-center"
                            StepIconComponent={StepIcon}
                            active={stepsActive}
                            completed={isCompleted}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default AppStepper;