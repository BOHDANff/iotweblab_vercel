import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const FormButton = ({ children, ...props }) => {
    const styles = useStyles();

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            {...props}
            style={{margin: "20px 0 20px"}}
        >
            {children}
        </Button>
    );
};