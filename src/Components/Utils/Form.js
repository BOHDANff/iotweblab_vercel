import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%",
        // marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
}));

export const Form = ({children, ...props}) => {
    const styles = useStyles();

    return (
        <form {...props} className={styles.form} noValidate>
            {children}
        </form>
    );
};