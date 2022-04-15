import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
  formWrapper: {
    width: "380px",
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
  formFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    width: "380px",
    height: "fit-content",
    top: "170px",
    left: "97px",
    [theme.breakpoints.down("sm")]: {
      left: "0px",
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50vw",
    },
  },
  formControl: {
    width: "100%",
    margin: theme.spacing(2),
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  button: {
    width: "160px",
    height: "56px",
    marginTop: theme.spacing(5),
  },
}));
