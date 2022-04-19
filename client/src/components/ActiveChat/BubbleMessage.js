import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    text: {
        fontSize: 14,
        color: "#91A3C0",
        letterSpacing: -0.2,
        padding: 8,
        fontWeight: "bold",
        margin: theme.spacing(1),
    },
    bubbleSender: {
        background: "#F4F6FA",
        borderRadius: "10px 10px 0 10px",
        overflow: 'hidden',
    },
    bubbleOther: {
        backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
        borderRadius: "0 10px 10px 10px",
        overflow: 'hidden',
    },
}));
export const BubbleMessage = ({ image, text, classes }) => {
    return (
        <Box className={classes.bubble}>
            <Grid spacing={1} container sx={{ padding: '0px', gap: '5px' }}>
                {image ? image.map((img) => (
                    <Grid key={img} item sx={{ padding: '0px' }}>
                        <img src={img} style={{ height: "200px" }} alt="" />
                    </Grid>
                )) : null}
            </Grid>
            <Typography className={classes.text}>{text}</Typography>
        </Box>
    );
};