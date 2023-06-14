import React from "react";
import { Slider } from "@mui/material";
import styles from "./styles";
import colors from "../../../constants/colors";

const Sliders = () => {
    return (
        <>
            <Slider
                size="medium"
                defaultValue={20}
                aria-label="Default"
                valueLabelDisplay="auto"
                style={styles.slide}
                sx={{
                    color: colors.resalte1,             
                    '& .MuiSlider-rail': {
                      backgroundColor: colors.slide,    
                    },
                  }}
            />
        </>
    )
}

export default Sliders