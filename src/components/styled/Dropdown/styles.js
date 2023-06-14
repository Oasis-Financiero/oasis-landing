import { selectClasses } from '@mui/material/Select';
import { outlinedInputClasses } from "@mui/material";
import colors from "../../../constants/colors";

const selectStyle = `
border-radius: 6px;
background-color : #F9F9F9;

& .${selectClasses.icon} 
{
color: ${colors.resalte1};
}

& .${outlinedInputClasses.notchedOutline} 
{
border-color: ${colors.resalte1};
}

&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline} 
{
border-color: ${colors.resalte1};
        
}`

export default selectStyle