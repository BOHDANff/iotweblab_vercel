import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root1: {
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
        <form {...props} className={styles.root1} noValidate>
            {children}
        </form>
    );
};