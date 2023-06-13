import React from "react";
import { Slider } from "@mui/material";
import styles from "./styles";

const Sliders = () => {
    return (
        <>
            <Slider
                size="medium"
                defaultValue={20}
                aria-label="Default"
                valueLabelDisplay="auto"
                style={styles.slide}
            />
        </>
    )
}

export default Sliders