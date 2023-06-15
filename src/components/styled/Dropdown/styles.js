import colors from "../../../constants/colors";

const styles = {
    selectComp: {
        '& .MuiSelect-icon': {
            fill: colors.resalte1,
        },

        '& .MuiSelect-outlined': {
            border: `2px solid ${colors.resalte1}`,
            borderRadius: '6px',
            backgroundColor: colors.fdoGris,
        }
    }

}

export default styles