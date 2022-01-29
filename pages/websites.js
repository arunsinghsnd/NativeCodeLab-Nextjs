/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  useMediaQuery,
  IconButton,
  Hidden,
} from "@material-ui/core";

import CallToAction from "../src/ui/CallToAction";

import Link from "../src/Link";

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

const Websites = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justifyContent={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/mobileapps"
              onClick={() => {
                props.setSelectedIndex(2);
              }}
            >
              <img
                src="/public/assets/backArrow.svg"
                alt="Back to Aandroid and IOS Developemnt page "
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Website Developemnt
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              Having a website is a necessity in today's business world. They
              give you one central, public location to let pepole know who you
              are, what you do, and why yo're the best at it.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/services"
              onClick={() => {
                props.setSelectedIndex(0);
              }}
            >
              <img
                src="/public/assets/forwardArrow.svg"
                alt="Forwared to Services page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "10em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? "center" : undefined}
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/public/assets/analytics.svg"
                style={{ marginLeft: "-2.75em" }}
                alt="grap with mangnifying glass revealing 1's and 0's"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography
            variant="body2"
            align={matchesSM ? "center" : undefined}
            gutterBottom
          >
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and treads in your business,
            empowering you to make smarter descision with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justifyContent="flex-end"
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                E-commerce
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/public/assets/ecommerce.svg"
                alt="grap with mangnifying glass revealing 1's and 0's"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body2"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            It's no secret that pepole like to shop online.
          </Typography>
          <Typography
            variant="body2"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it's time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src="/public/assets/outreach.svg" alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body2"
            align={matchesSM ? "center" : undefined}
            gutterBottom
          >
            Draw people in with a dazzling websites. Showing off your products
            online is a great way to help customsers decide what's right for
            them before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justifyContent="flex-end"
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Search Engine <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/public/assets/seo.svg"
                alt="wesites standing on winner's podium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body2"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            How often you ever been to the second page of google results?
          </Typography>
          <Typography
            variant="body2"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            If you're like us, probably never.
          </Typography>
          <Typography
            variant="body2"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            Customer don't go there either, so we make sure website is desgined
            to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Websites;
