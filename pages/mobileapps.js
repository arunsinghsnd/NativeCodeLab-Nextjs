/* eslint-disable @next/next/no-img-element */

import React from "react";
import Head from "next/head";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  useMediaQuery,
  IconButton,
  Hidden,
} from "@material-ui/core";

import Lottie from "react-lottie";

import integrationAnimation from "../src/animations/integrationAnimation/data.json";
import CallToAction from "../src/ui/CallToAction";
import Link from "../src/ui/Link";

const forwardArrow = "static/assets/forwardArrow.svg";
const backArrow = "static/assets/backArrow.svg";
const swiss = "static/assets/swissKnife.svg";
const access = "static/assets/extendAccess.svg";
const engagement = "static/assets/increaseEngagement.svg";

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
}));

const MobileApps = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          iOS/Android App Design and Development | NativeCodeLab
        </title>
        <meta
          name="description"
          key="description"
          content="Mobile Apps Made Easy | Our cutting-edge mobile app development process lets us build beautifully designed, carefully crafted apps for both iOS and Android."
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | iOS/Android App Development"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="nativecodelab.netlify.app/mobileapps"
        />
        <link
          rel="canonical"
          key="canonical"
          href="nativecodelab.netlify.app/mobileapps"
        />
      </Head>
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
              href="/customsoftware"
              onClick={() => {
                props.setSelectedIndex(1);
              }}
            >
              <img src={backArrow} alt="Back to Custom software Developemnt " />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              gutterBottom={matchesXS}
              style={{
                lineHeight: matchesXS ? 1.2 : undefined,
                fontSize: matchesXS ? "2.25em" : undefined,
              }}
              align={matchesMD ? "center" : undefined}
              variant="h1"
            >
              Android/iOS App Developemnt
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Wheather you want an app for your customer, employees, or
              yourself, we can build cross-platfrom native solutions for any
              part of your business process. This opens you up to whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Convenience, Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/websites"
              onClick={() => {
                props.setSelectedIndex(3);
              }}
            >
              <img
                src={forwardArrow}
                alt="Forwared Web Site  developemnt  page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Our teachnology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body2"
              paragraph
            >
              This allows you to extends your reach, reivent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ marginBottom: matchesSM ? "1em" : null }}>
          <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body2"
              paragraph
            >
              Our cutting-edge developemnt process allows us to create apps for
              iPhone, Android, and tables - all the same tinme.
            </Typography>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body2"
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        {" "}
        <Grid item container direction="column" alignItems="center" md>
          {" "}
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          {" "}
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="tear-one-off sign"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          {" "}
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="app with notification" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
