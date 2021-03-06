import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  useTheme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import Link from "./Link";

const background = "static/assets/background.jpg";
const mobileBackground = "static/assets/mobileBackground.jpg";

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const CallToAction = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography
              gutterBottom
              variant="h1"
              style={{ lineHeight: matchesSM ? 1.1 : null }}
            >
              Simple Software.
              {matchesSM && <br />}
              <br />
              Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" }}
            >
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              container
              justifyContent={matchesSM ? "center" : undefined}
              item
            >
              <Button
                component={Link}
                href="/revolution"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          href="/estimate"
          variant="contained"
          className={classes.estimateButton}
          onClick={() => {
            props.setValue(5);
            ReactGA.event({
              category: "Estimate",
              action: "Call To Action Pressed",
            });
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
