import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Typography,
    Button,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        position: "absolute",
        top: "30px",
        right: "42px",
        alignItems: "center",
        gap: theme.spacing(2),
    },
    description: {
        fontWeight: '400',
        fontSize: '14px',
    },
    button: {
        backgroundColor: theme.background.default,
        color: theme.palette.primary.main,
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: '600',
        padding: '16px 34px',
    }
}));

export const CreateLoginToggle = ({ description, buttonText }) => {
    const classes = useStyles();

    const linkToggle = () => {
        if (buttonText === "Login") {
            return '/login'
        } else {
            return '/register'
        }
    }
    return (
        <Box className={classes.flexContainer}>
            <Typography color="secondary" className={classes.description}>{description}</Typography>
            <Link
                href={linkToggle()}
                to={linkToggle()}
                style={{ textDecoration: "none" }}
            >
                <Button
                    variant="contained"
                    size="large"
                    className={classes.button}
                >
                    {buttonText}
                </Button>
            </Link>
        </Box>
    );
};