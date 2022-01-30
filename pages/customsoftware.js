/* eslint-disable react/no-unescaped-entities */
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

const backArrow = "static/assets/backArrow.svg";
const forwardArrow = "static/assets/forwardArrow.svg";
const lightbulb = "static/assets/bulb.svg";
const cash = "static/assets/cash.svg";
const stopwatch = "static/assets/stopwatch.svg";
const roots = "static/assets/root.svg";

// import documentsAnimation from "../src/animations/scaleAnimation/data.json";
import scaleAnimation from "../src/animations/scaleAnimation/data.json";
import automationAnimation from "../src/animations/automationAnimation/data.json";
// import uxAnimation from "../src/animations/uxAnimation/data";
import animationData from "../src/animations/landinganimation/data.json";
import CallToAction from "../src/ui/CallToAction";
import Link from "../src/ui/Link";

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
  itemContainer: {
    maxWidth: "34em",
  },
}));

const CustomSoftware = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software Development and Design - Free Estimate
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Custom Software Development"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="nativecodelab.netlify.app/customsoftware"
        />
        <link
          rel="canonical"
          key="canonical"
          href="nativecodelab.netlify.app/customsoftware"
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
              href="/services"
              onClick={() => {
                props.setSelectedIndex(0);
              }}
            >
              <img src={backArrow} alt="Back to Services Page" />
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
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Wheather we're replacing old software or inventing new solutions.
              Arc Developemnt is here to help your business tackle technology
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Using regular commercial software leaves you with alot of stuff
              you don't need, without some of the you do need, and ultimately
              controls the way you work. Without using any software at all risk
              falling behind competitors and missing out on huge saving from
              increase efficiency.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              Our custom solutions are desgined from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/mobileapps"
              onClick={() => {
                props.setSelectedIndex(2);
              }}
            >
              <img
                src={forwardArrow}
                alt="Forwared to android and iOS App developemnt  page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img alt="LightBuld" src={lightbulb} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justifyContent="space-between"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                By utilizing digital forms and documents you can remove these
                obsolte expenses, accelerate your communication, and help the
                Earth
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                Wheather you're a large brand, just getting started, or taking
                off right mow, our application architecture ensure pain-free
                growth and reliability
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="Tree with roots extending out"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" gutterBottom align="center">
              Root-Cause Analysis
            </Typography>
            <Typography variant="body2" align="center" paragraph>
              Many probelms are marely symtoms of larger, Underlying issues.
            </Typography>
            <Typography variant="body2" align="center" paragraph>
              We can help you thorounghly examine all areas of your business to
              develop aholistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justifyContent="space-between"
        style={{ marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "center"}
              >
                Why waste time when you don't have to?
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "center"}
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "center"}
              >
                Increasing efficiency increase profit, leaving you more time to
                focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                A good desgin that isn't usable isn't a good desgin.
              </Typography>
              <Typography
                variant="body2"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body2"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we're able to develop unique, personable experience
                that solve problems rather than create new ones
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
